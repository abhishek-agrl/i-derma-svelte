<script lang="ts">
  import { Card, CardBody } from "sveltestrap";
  import FooterLink from "./footer-link.svelte";
  import GoogleMap from "./google-map.svelte";

  let addressText =
    "1st Floor, Raipur Hospital, Kutchery chowk, Raipur, India, Chhattisgarh - 492001";
  let outerWidth = 0;
  $: isDesktop = outerWidth > 800;
</script>

<svelte:window bind:outerWidth />

<div class="main-footer-container" class:isDesktop>
  <Card style="background-color: grey; border: unset; width:100%; max-width: 450px">
    <CardBody style="background-color:grey; color: #ffe9dd;">
      <div class="footer-header">Reach Us</div>
      <FooterLink
        iconClass="bi bi-envelope-fill email"
        linkUrl="mailto:dranshulagra@gmail.com"
        linkText="dranshulagra@gmail.com"
      />
      <FooterLink
        iconClass="bi bi-telephone-fill phone"
        linkUrl="tel:+916263722729"
        linkText="Call Us - 6263722729"
      />
      <FooterLink
        iconClass="bi bi-whatsapp whatsapp"
        linkUrl="https://wa.me/916263722729"
        linkText="Contact Us On Whatsapp"
      />
      <FooterLink
        iconClass="bi bi bi-instagram instagram"
        linkUrl="https://www.instagram.com/idermabydranshul/"
        linkText="Checkout Our Instagram"
      />
      <FooterLink
        iconClass="bi bi bi-facebook facebook"
        linkUrl="https://www.facebook.com/idermabydranshul/"
        linkText="Reach Us On Facebook"
      />
      <FooterLink
        iconClass="bi bi-geo-alt-fill location"
        linkUrl="https://goo.gl/maps/jfZtihLFuWiyQhJV7"
        linkText={addressText}
      />
    </CardBody>
  </Card>

  <Card style="background-color: grey; border: unset;width:100%; max-width: 450px">
    <CardBody style="background-color:grey; color: #ffe9dd;">
      <div class="footer-header">Location</div>
      <GoogleMap />
    </CardBody>
  </Card>
</div>

<style>
  .main-footer-container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: grey;
    padding-bottom: 20px;
  }
  .footer-header {
    border-bottom: solid;
    margin-bottom: 5px;
  }
  .isDesktop {
    flex-direction: row;
    justify-content: center;
  }
</style>
