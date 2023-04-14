<template>
  <div id="Footer">
    <div class="footer">
      <div class="content">
        <div class="logo">
          <img src="../../../assets/nb-logo.png" alt="logo" class="logo-icon">
          <div class="lang-switcher"></div>
        </div>
        <div class="text-container">
          <div class="textbox textbox-1">
            <div class="title">Partner</div>
            <div class="sub sub-1">Partner werden</div>
            <div class="sub sub-2">EinfachValle</div>
            <div class="sub sub-3">GeforceEcke</div>
            <div class="sub sub-4">CodeX</div>
          </div>
          <div class="textbox textbox-2">
            <div class="title">Karriere</div>
            <div class="sub sub-1">Bewerben</div>
            <div class="sub sub-2">Github</div>
            <div class="sub sub-3">Discord</div>
            <div class="sub sub-4">Instagram</div>
          </div>
          <div class="textbox textbox-3">
            <div class="title">Projekt</div>
            <div class="sub sub-1">Über NeatBeat</div>
            <div class="sub sub-2">Über Codewave</div>
            <div class="sub sub-3">Logos & CI</div>
            <div class="sub sub-4">Datenschutz</div>
          </div>
          <div class="textbox textbox-4">
            <div class="title">Support</div>
            <div class="sub sub-1">Hilfecenter</div>
            <div class="sub sub-2">Kontakt</div>
            <div class="sub sub-3">Konto Kündigen</div>
            <div class="sub sub-4">Daten Anfordern</div>
          </div>
        </div>
        <div class="social">
          <div class="social-links">
            <div class="sm github">
              <a href="#" title="github"><i class="bi bi-github"></i></a>
            </div>
            <div class="sm insta">
              <a href="#" title="insta"><i class="bi bi-instagram"></i></a>
            </div>
            <div class="sm twitter">
              <a href="#" title="twitter"><i class="bi bi-twitter"></i></a>
            </div>
            <div class="sm discord">
              <a href="#" title="discord"><i class="bi bi-discord"></i></a>
            </div>
          </div>
          <div class="payments">
            <div class="payment paypal">
              <a href="https://www.paypal.com/de/home"><img src="../../../assets/img/svg/paypal.svg" alt="paypal"></a>
            </div>
            <div class="payment google-pay">
              <a href="https://pay.google.com/intl/de_de/about/"><img src="../../../assets/img/svg/google-pay.svg" alt="google-pay"></a>
            </div>
            <div class="payment apple-pay">
              <a href="https://www.apple.com/de/apple-pay/"><img src="../../../assets/img/svg/apple-pay.svg" alt="apple-pay"></a>
            </div>
            <div class="payment mastercard">
              <a href="https://www.mastercard.de/de-de.html"><img src="../../../assets/img/svg/mastercard.svg" alt="mastercard"></a>
            </div>
            <div class="payment visa">
              <a href="https://www.visa.de/"><img src="../../../assets/img/svg/visa.svg" alt="visa"></a>
            </div>
            <div class="payment klarna">
              <a href="https://www.klarna.com/de/"><img src="../../../assets/img/svg/klarna.svg" alt="klarna"></a>
            </div>
            <div class="payment giro">
              <a href="https://www.giropay.de/"><img src="../../../assets/img/svg/giro-pay.svg" alt="giro"></a>
            </div>
            <div class="payment sepa">
              <a href="https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html"><img src="../../../assets/img/svg/sepa.svg" alt="sepa"></a>
            </div>
          </div>
        </div>
        <div class="hr">
          <hr>
        </div>
        <div class="copyright">
          <div class="copy">
            <p>&copy; NeatBeat 2023</p>
          </div>
          <div class="imprint">
            <div class="imprint-link link-1">
              <router-link :to="`/home`">{{ $t('footer.parentsInformation') }}</router-link>
            </div>
            <div class="imprint-link link-2">
              <router-link :to="`/home`">{{ $t('footer.rightOfRecall') }}</router-link>
            </div>
            <div class="imprint-link link-3">
              <router-link :to="`/home`">{{ $t('footer.agb') }}</router-link>
            </div>
            <div class="imprint-link link-4">
              <router-link :to="`/home`">{{ $t('footer.privacy') }}</router-link>
            </div>
            <div class="imprint-link link-5">
              <router-link :to="`/home`">{{ $t('footer.imprint') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Footer from './Footer';

  export default Footer;

</script>

<style lang="scss" scoped>
  @import './Footer.scss';

</style>
