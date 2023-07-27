<?php

function briceWP_supports () {
  add_theme_support('title-tag');
}

function briceWP_register_assets() {
  wp_register_style('remixicon-css', 'https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css', [], false, 'all');
  wp_register_script( 'scrollreveal-js', 'https://unpkg.com/scrollreveal', array(), false, true);

  
  wp_enqueue_script('scrollreveal-js');
  wp_enqueue_script('lightbox2-js', get_template_directory_uri() . '/assets/lightbox2/lightbox.min.js', array('jquery'), '1.0', true);
  wp_enqueue_script('app', get_template_directory_uri() . '/assets/js/app.js', array('jquery'), '1.0', true);
  wp_enqueue_script('app', get_template_directory_uri() . '/assets/js/app.min.js', array('jquery'), '1.0', true);

  wp_enqueue_style('remixicon-css');
  wp_enqueue_style( 'lightbox2', get_template_directory_uri() . '/assets/lightbox2/lightbox.min.css', array() );
  wp_enqueue_style( 'briceWP_style', get_stylesheet_uri() );
/*   wp_enqueue_style('style-briceWP', get_template_directory_uri() . '/style.min.css');
 */
}

function briceWP_enqueue_front_page_scripts() {
  if (is_front_page()) {
      // Enqueue scripts
      wp_enqueue_script ('scrollActive-js', get_stylesheet_directory_uri() . '/assets/js/scrollActive.js', array(), false, true);
  }
}

// Hooks
add_action('after_setup_theme','briceWP_supports');
add_action( 'wp_enqueue_scripts', 'briceWP_enqueue_front_page_scripts' );
add_action( 'wp_enqueue_scripts', 'briceWP_register_assets' );


// Autoriser l'import des fichiers SVG et WEBP
function briceWP_mime_types( $mimes ){
  $mimes['svg'] = 'image/svg+xml';
  $mimes['webp'] = 'image/webp';
  return $mimes;
}

// Contrôle de l'import d'un WEBP
function briceWP_file_types( $types, $file, $filename, $mimes ) {
  if ( false !== strpos( $filename, '.webp' ) ) {
    $types['ext'] = 'webp';
    $types['type'] = 'image/webp';
  }
  return $types;
}
// Hooks
add_filter( 'upload_mimes', 'briceWP_mime_types' );
add_filter( 'wp_check_filetype_and_ext', 'briceWP_file_types', 10, 4 );

?>