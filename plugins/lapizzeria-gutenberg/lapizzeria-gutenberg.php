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
            'editor_script' => 'lapizzeria-editor-script',
            'editor_style' => 'lapizzeria-editor-styles',
            'style' => 'lapizzeria-frontend-styles'
        ));
    }

 }
 add_action( 'init', 'lapizzeria_registrar_bloques' );