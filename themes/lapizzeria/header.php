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

    <header class="site-header contenedor">
        <div class="logo">
            <a href="<?php echo esc_url( home_url('/')); ?>">
                <img src="<?php echo get_template_directory_uri().'/img/logo.svg' ?>">
            </a>
        </div><!-- FIN .logo -->

        <div class="informacion-header">
            <div class="reder-sociales">
                <!-- Agregar menu-->
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
    </header>