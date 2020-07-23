<?php 

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body>

    <header class="site-header">
        <div class="contenedor">
            <div class="logo">
                <a href="<?php echo esc_url( home_url('/')); ?>">
                    <img src="<?php echo get_template_directory_uri().'/img/logo.svg' ?>">
                </a>
            </div><!-- FIN .logo -->

            <div class="informacion-header">
                <div class="reder-sociales">
                    <!-- Agregar menu-->
                    <?php  
                        $args = array(
                            'theme_location' => 'redes-sociales',
                            'container' => 'nav',
                            'container_class' => 'sociales',
                            'link_before' => '<span class="sr-text">',
                            'link_after' => '</span>'
                        );

                        wp_nav_menu( $args );

                    ?>
                </div><!--  FIN .redes-sociales-->
                <div class="direccion">
                    <p>
                        Calle Valmojado, 215, 28047 Madrid
                    </p>
                    <p>
                        Teléfono: 649875130
                    </p>
                </div><!-- FIN .direccion -->
            </div><!-- FIN .informacion-header -->
        </div><!-- FIN .contenedor -->
    </header>

    <div class="menu-principal">
        <div class="contenedor">
            <?php 

                $args =  array(
                    'theme_location' => 'header-menu',
                    'container' => 'nav',
                    'container_class' => 'menu-sitio',
                    'container_id' => 'menu'

                );

                wp_nav_menu( $args );

            ?>
        </div><!-- FIN .contenedor -->
    </div><!-- FIN .menu-principal -->