<?php

/** SETUP **/
function lapizzeria_setup() {

        //IMAGENES DESTACADAS
        add_theme_support( 'post-thumbnails' );

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