<header class="informacion-entrada">
    <div class="fecha">
        <time>
            <?php echo the_time( 'd' ); ?>
            <span>
                <?php echo the_time( 'M' ); ?>
            </span>
        </time>
    </div>


    <?php 
    // SI ESTAMOS EN HOME.PHP
    if(is_home()): 
?>
    <div class="titulo-entrada">
        <h2><?php the_title(); ?></h2>
    </div>
</header>
<p class="autor">
    Escrito por:
    <span>
        <?php the_author(); ?>
    </span>
</p>
<?php 
    endif; 
?>


<?php
    // SI NO ES EL HOME.PHP
    if(!is_home()): 
?>
<p class="autor">
    Escrito por:
    <span>
        <?php the_author(); ?>
    </span>
</p>
</header>
<?php 
    endif; 
?>