<?php 
    $pagina_blog = get_option( 'page_for_posts' );
    $imagen_id = get_post_thumbnail_id($pagina_blog);
    $imagen_src = wp_get_attachment_image_src($imagen_id, 'full')[0];
?>
<div class="hero" style="background-image: url(<?php echo $imagen_src ?>);">
    <div class="contenido-hero">
        <?php if(is_home()): ?>
        <h1><?php echo get_the_title($pagina_blog); ?></h1>
        <?php elseif(is_category($category)): ?>
        <h1>Resultados para: <?php echo single_cat_title(); ?></h1>
        <?php else: ?>
        <h1>Resultados para: <?php echo get_search_query(); ?></h1>
        <?php endif; ?>
    </div>
</div>