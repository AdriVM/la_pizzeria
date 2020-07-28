<?php get_header(); ?>

<?php get_template_part('template-parts/fondo', 'imagen'); ?>

<div class="seccion contenedor con-sidebar">
    <main class="contenido-principal">
        <?php while(have_posts()): the_post();?>
        <article class="entrada-blog">
            <a href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail('especialidades'); ?>
            </a>
            <?php get_template_part('template-parts/informacion', 'entrada'); ?>

            <div class="contenido-entrada">
                <?php //wp_trim_words(get_the_content(), 30);
                    the_excerpt();
                ?>

                <a href="<?php the_permalink(); ?>" class="boton boton-primario">
                    Leer Más
                </a>
            </div>


        </article>
        <?php endwhile; ?>

        <!-- paginador -->
        <?php get_template_part('template-parts/listado', 'paginador'); ?>

    </main>

    <?php get_sidebar(); ?>

</div>

<?php get_footer(); ?>