<?php
/*
Template Name: Cakes gallery
*/
?>

<?php get_header() ?>

<section class="gallery section" id="galleryTitle">
  <h1 class="gallery__title"><?php the_title() ?></h1>
</section>

<section class="gallery" id="galleryCakes">
  <div class="grid__gallery">

    <?php the_content() ?>

  </div>
</section>

<?php get_footer() ?>