<?php
/**
* The template for displaying the footer
*
* Contains the opening of the #site-footer div and all content after.
*
* @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
*
* @package WordPress
* @subpackage BriceWP
* @since 1.0
*/

?>

<section class="form Section" id="form">
  <div class="form__data">
    <span class="section__subtitle form__subtitle">Nous contacter</span>
    <p class="form__description">
      Nous sommes à votre service pour toute question éventuelle. N’hésitez pas à nous soumettre votre demande de devis concernant une commande ou une création personnalisée, nous vous répondrons dans les plus brefs délais.
    </p>

    <div class="form__container">
      <?php echo do_shortcode( '[wpforms id="17"]' ); ?>
    </div>
  </div>
</section>

</main>

<footer class="footer">
  <div class="footer__container container grid">
    <div>
      <a href="#" class="footer__logo">
        <img src="/wp-content/uploads/logo-brice.jpg" alt="logo image">
      </a>
      <!--       <p class="footer__description">
        Brice Pâtisserie<br>
        Gâteau de mariage,Wedding Cake,<br>
        Pièce montée en cône sans nougatine,<br>
        Croquembouche nougatine,<br>
        Gâteau personnalisé et Number Cake.
      </p> -->
    </div>

    <div class="footer__content">
      <div>
        <h3 class="footer__title">Nos produits</h3>
        <ul class="footer__links">
          <li>
            <a href="" class="footer__link">Gâteau de mariage et Wedding Cake</a>
          </li>
          <li>
            <a href="" class="footer__link">Pièce montée en cône sans nougatine</a>
          </li>
          <li>
            <a href="" class="footer__link">Croquembouche nougatine</a>
          </li>
          <li>
            <a href="" class="footer__link">Gâteau personnalisé et Number Cake</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="footer__title">Adresse</h3>
        <ul class="footer__links">
          <li>
            <a href="" class="footer__information">
              Pisgat zeev<br>
              Jerusalem
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="footer__title">Nous suivre</h3>
        <ul class="footer__social">
          <li>
            <a href="https://www.facebook.com/BricePatisserieJerusalem?mibextid=LQQJ4d" target="_blank" class="footer__social-link facebook">
              <i class="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://www.instagram.com/bricepatisserie/" target="_blank" class="footer__social-link instagram">
              <i class="ri-instagram-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
  <div class="footer__info container">
    <div class="footer__copy">
      &#169; Copyright 2212. All rights reserved
    </div>
  </div>
</footer>

<!-- Srcoll Up -->
<a href="" class="scrollup" id="scroll-up">
  <i class="ri-arrow-up-line"></i>
</a>

<?wp_footer( ) ?>
</body>

</html>