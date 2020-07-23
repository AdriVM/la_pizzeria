    <footer class="site-footer">
        <?php 

            $args =  array(
                'theme_location' => 'header-menu',
                'container' => 'nav',
                'container_class' => 'footer-nav',
                'after' => '<span class="separador"> | </span>'


            );

            wp_nav_menu( $args );

        ?>
        <div class="direccion">
            <p>
                Calle Valmojado, 215, 28047 Madrid
            </p>
            <p>
                Teléfono: 649875130
            </p>
        </div><!-- FIN .direccion -->
    </footer>
    <?php wp_footer(); ?>
    </body>

    </html>