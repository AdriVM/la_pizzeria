<div class="seccion contenedor">
    <main class="contenido-principal">
        <ul class="lista-busqueda">
            <?php while(have_posts()):the_post(); ?>

            <li>
                <a href="<?php the_permalink(); ?>">
                    <div class="contenedor">
                        <div class="contenido-busqueda">
                            <?php the_post_thumbnail('busqueda'); ?>
                            <div class="contenido-listado">
                                <h2><?php the_title(); ?></h2>
                                <?php get_template_part('template-parts/informacion', 'entrada'); ?>
                                <p><?php the_excerpt(); ?></p>
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <?php endwhile; ?>
        </ul>
        <!-- paginador -->
        <?php get_template_part('template-parts/listado', 'paginador'); ?>
    </main>
</div>