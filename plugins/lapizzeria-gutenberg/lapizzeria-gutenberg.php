<?php

/**
 * Plugin Name: La Pizzeria Gutenberg Blocks
 * Plugin URI:
 * Description: Agrega Bloques de Gutenberg nativos
 * Version: 1.0.0
 * Author: Adrián Vázquez Mirasierra
 * Author Uri: https://www.linkedin.com/in/adrian-vazquez-mirasierra/
 * License: GNU General Public License v2 or later.
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 */

 if(!defined('ABSPATH')) exit;

 /**Categorías Personalizadas */
 function lapizzeria_categoria_personalizada($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'lapizzeria',
                'title' => 'La Pizzeria',
                'icon' => 'store'
            )
        )
    );
 }
 //Los filtros se diferencian del add_action en que estos se ejecutan antes de pintar
 add_filter( 'block_categories', 'lapizzeria_categoria_personalizada', 10, 2 ); //el 2 indica los argumentos que requiere la funcion.

 /** Registrat Bloques, Scripts y CSS */
 function lapizzeria_registrar_bloques(){

    //Si Gutenberg no existe, SALIR
    if(!function_exists('register_block_type')){
        return;
    }

    // Registrat los Bloques en el Editor (build/index.js)
    wp_register_script(
        'lapizzeria-editor-script',
         plugins_url('build/index.js', __FILE__),
         array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
         filemtime(plugin_dir_path( __FILE__ ) . 'build/index.js') 
        );

    
    // Estilos para el Editor (Únicamente)
    wp_register_style(
        'lapizzeria-editor-styles', // nombre
        plugins_url( 'build/editor.css', __FILE__), // archivo css para el editor
        array('wp-edit-blocks'), // dependencias
        filemtime( plugin_dir_path(__FILE__) . 'build/editor.css')
    );


    //Estilos para los Bloques (Back-end y Front-end)
    wp_register_style(
        'lapizzeria-frontend-styles', // nombre
        plugins_url( 'build/styles.css', __FILE__), // archivo css para el editor
        array(), // dependencias
        filemtime( plugin_dir_path(__FILE__) . 'build/styles.css')
    );


    //Array de Bloques
    $blocks = [
        'lapizzeria/boxes'
    ];


    //Recorrer Bloques y agregar Scripts y Styles
    foreach($blocks as $block) {
        register_block_type($block, array(
            'editor_script' => 'lapizzeria-editor-script', //SCRIPT PRINCIPAL PARA EL EDITOR
            'editor_style' => 'lapizzeria-editor-styles', //ESTILOS PARA EL EDITOR
            'style' => 'lapizzeria-frontend-styles'// ESTILOS PARA EL FRONT END
        ));
    }

    /** REGISTRAR UN BLOQUE DINAMICO */
    register_block_type('lapizzeria/menu', array(
        'editor_script' => 'lapizzeria-editor-script', //SCRIPT PRINCIPAL PARA EL EDITOR
        'editor_style' => 'lapizzeria-editor-styles', //ESTILOS PARA EL EDITOR
        'style' => 'lapizzeria-frontend-styles',// ESTILOS PARA EL FRONT END
        'render_callback' => 'lapizzeria_especialidades_front_end' //QUERY A LA BBDD
    ));

 }
 add_action( 'init', 'lapizzeria_registrar_bloques' );


 /** CONSULTA A LA BBDD PARA MOSTRAR LOS RESULTADOS EN EL FRONT END*/
 function lapizzeria_especialidades_front_end($atts){

    /*echo '<pre>';
    var_dump($atts);
    echo'</pre>';*/
    //Problema con la cantidad a mostrar si es igual al default, en gutenberg funciona, peor en el front falla, asi que lo forzamos.
    if( count($atts) == 0 ){
        $atts['cantidadMostrar'] = 4;
    }
     /*echo '<pre>';
    var_dump($atts);
    echo'</pre>';*/
    //Obtener los datos del query
    $especialidades = wp_get_recent_posts(array(
        'post_type' => 'especialidades',
        'post_status' => 'publish',
        'numberposts' => $atts['cantidadMostrar']
    ));

    //Revisar que haya resultados
    if(count($especialidades) == 0){
        return 'No hay Especialidades disponibles en este momento.';
    }

    $cuerpo = '';

    $cuerpo .= '<h2 class="titulo-menu">Nuestras Especialidades</h2>';
    $cuerpo .= '<ul class="nuestro-menu">';
    foreach($especialidades as $esp):
        //Obtener un objeto del post
        $post = get_post( $esp['ID'] );
        setup_postdata( $post ); //Nos permite acceder a los template tags del post porque a diferencia de wp_Query, wp_get_recent_posts no nos deja por si solo.

        $cuerpo .= sprintf(
            '<li>
                %1$s
                <div class="platillo">
                    <div class="precio-titulo">
                        <h3>%2$s</h3>
                        <p>€ %3$s</p>
                    </div>
                    <div class="contenido-platillo">
                        <p>
                            %4$s
                        </p>
                    </div>
                </div>
            </li>',
            get_the_post_thumbnail($post, 'especialidades'),
            get_the_title($post),
            get_field('precio', $post),
            get_the_content($post)
        );

        //Reseteamos la query
        wp_reset_postdata();

    endforeach;
    $cuerpo .= '</ul>';

    return $cuerpo;

 }