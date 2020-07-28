<div class="contenedor comentarios">

    <?php 
    // NOTA: $post existe aquí porque este archivo se llama dentro del while
        $comentarios = get_comments(array(
            'post_id' => $post->ID,
            'status' => 'approve'
        ));
    ?>
    <?php 
        if($comentarios):
    ?>
    <h3 class="text-center">Comentarios</h3>
    <ul class="lista-comentarios">
        <?php 
            $args = array(
                'per_page' => 10,
                'reverse_top_level' => false
            );
            wp_list_comments($args, $comentarios); 
        ?>
    </ul>
    <?php 
        else:
    ?>
    <h3 class="text-center">Aún no hay ningún comentario, ¡No seas tímido! Cuéntanos qué te parece</h3>
    <?php
        endif;
    ?>


    <?php 

        $args = array(
            'class_submit' => 'boton boton-primario'
        );

        comment_form($args);
    ?>


</div>