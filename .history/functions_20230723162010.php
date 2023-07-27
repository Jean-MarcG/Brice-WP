<?php

function briceWP_supports () {
  add_theme_support('title-tag');
}

function briceWP_register_assets() {
  wp_register_style('remixicon-css', '<link href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" rel="stylesheet">', [], false, 'all');


  wp_enqueue_script('app', get_template_directory_uri() . '/assets/js/app.js', array('jquery'), '1.0', true);
  wp_enqueue_script('navigation', get_template_directory_uri() . '/assets/js/navigation.js', array('jquery'), '1.0', true);
  wp_enqueue_style( 'briceWP_style', get_stylesheet_uri() );
    
}

// Hooks
add_action('after_setup_theme','briceWP_supports');
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