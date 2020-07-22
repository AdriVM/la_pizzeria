<?php






function lapizzeria_styles() {

        /* NORMALIZE */
        wp_enqueue_style('normalize', get_stylesheet_directory_uri() . '/css/normalize.css', array(), '8.0.1');

        /* GOOGLE FONTS*/
        wp_enqueue_style( 'googleFonts', 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700;900&display=swap', array(), '1.0.0');

        /* STYLE.CSS*/
        wp_enqueue_style('stylesCSS', get_stylesheet_uri(), array('normalize'), '1.0.0');

}
add_action( 'wp_enqueue_scripts', 'lapizzeria_styles' );