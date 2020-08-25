<?php

/** SETUP **/
function lapizzeria_setup() {

//########################################################################################################################
        /** GUTENBERG */

        //Soporte a los estilos por defecto de GUTENBERG en tu tema
        add_theme_support('wp-block-styles');

        //Soporte a contenido completo
        add_theme_support('align-wide');

        // Paleta de Colores
        add_theme_support('editor-color-palette', array(
                array(
                        'name' => 'Rojo',
                        'slug' => 'rojo',
                        'color' => '#a61206'
                ),
                array(
                        'name' => 'Naranja',
                        'slug' => 'naranja',
                        'color' => '#f19f30'
                ),
                array(
                        'name' => 'Verde',
                        'slug' => 'verde',
                        'color' => '#127427'
                ),
                array(
                        'name' => 'Blanco',
                        'slug' => 'blanco',
                        'color' => '#ffffff'
                ),
                array(
                        'name' => 'Negro',
                        'slug' => 'negro',
                        'color' => '#000000'
                )
        ));

        //Desahabilitamos que el usuario pueda seleccionar otros colores fuera de la paleta
        add_theme_support('disable-custom-colors');

//########################################################################################################################
        //IMAGENES DESTACADAS
        add_theme_support( 'post-thumbnails' );

        //Tamaños de Imagenes
        add_image_size('nosostros', 437, 291, true);
        add_image_size('especialidades', 768, 515, true);
        add_image_size('especialidades_portrait', 435, 526, true);
        add_image_size('busqueda', 400, 400, true);

}
add_action( 'after_setup_theme', 'lapizzeria_setup' );


/** ESTILOS **/
function lapizzeria_styles() {

        /* NORMALIZE */
        wp_enqueue_style('normalize', get_stylesheet_directory_uri() . '/css/normalize.css', array(), '8.0.1');

        /* GOOGLE FONTS*/
        wp_enqueue_style( 'googleFonts', 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700;900&display=swap', array(), '1.0.0');

        /* SLICKNAV*/
        wp_enqueue_style('slicknavCSS', get_stylesheet_directory_uri() . '/css/slicknav.min.css', array('normalize'), '1.0.10');

        /* STYLE.CSS*/
        wp_enqueue_style('stylesCSS', get_stylesheet_uri(), array('normalize'), '1.0.0');

}
add_action( 'wp_enqueue_scripts', 'lapizzeria_styles' );

/** SCRIPTS **/
function lapizzeria_scripts() {

        /* SLICKNAV*/
        wp_enqueue_script('slicknavJS', get_template_directory_uri() . '/js/jquery.slicknav.min.js', array('jquery'), '1.0.10', true);

        /* SCRIPTS.JS*/
        wp_enqueue_script('functionsJS', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0', true);

        
}
add_action('wp_enqueue_scripts', 'lapizzeria_scripts');

/** MENUS **/
function lapizzeria_menus() {

        register_nav_menus( array(
                'header-menu' => 'Header Menu',
                'redes-sociales' => 'Redes Sociales'
        ));
        
}
add_action( 'init', 'lapizzeria_menus' );

/** ZONA DE WIDGETS **/
function lapizzeria_widgets() {

        register_sidebar( array(
                'name' => 'Blog Sidebar',
                'id' => 'blog_sidebar',
                'before_widget' => '<div class="widget">',
                'after_widget' => '</div>',
                'before_title' => '<h3>',
                'after_title' => '</h3>'
        ));

}
add_action('widgets_init', 'lapizzeria_widgets');

/** AGREGAR BOTONES AL PAGINADOR **/
function lapizzeria_botones_paginacion() {
        return 'class="boton boton-secundario"';
}
add_filter('next_posts_link_attributes', 'lapizzeria_botones_paginacion');
add_filter('previous_posts_link_attributes', 'lapizzeria_botones_paginacion');