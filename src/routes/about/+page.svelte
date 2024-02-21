<script lang="ts">
  import { Button, Card, CardBody, CardHeader, CardText } from "sveltestrap";
  import profilePhoto from "$lib/assets/profile_photo.jpeg";
  import Discover from "$lib/components/home-page-components/discover/discover.svelte";
</script>

<svelte:head>
  <title>About I-Derma</title>
</svelte:head>

<div class="about-banner">
  <h1>About Us</h1>
</div>

<Card style="margin: 10px; max-width: 400px;">
  <CardBody style="padding: unset;">
    <div class="header-container">
      <div class="card-header-title">
        <h3 style="margin: unset;">Dr Anshul Agrawal</h3>
        Founder<br />MBBS, Diploma in Dermatology, Venerology & Leprosy
        Dermatologist
      </div>
      <div class="image-cropper">
        <img class="card-image" alt="Dr Anshul Agrawal" src={profilePhoto} />
      </div>
      <!--  -->
    </div>
    <div class="about-body">
      Dr. Anshul Agrawal is a well-reputed Dermatologist practicing in Raipur.
      Visit I-Derma for highly recommended Dermatologists for your all around
      personal skincare. Our entire team is dedicated to providing you with the
      personalized, gentle care that you deserve. All our staff is dedicated to
      your comfort and prompt attention as well...
    </div>
    <div
      style="
      display: flex;
      justify-content: center;"
    >
      <Button
        color="success"
        href="https://wa.me/916263722729"
        style="margin-bottom: 1rem"
        target="_blank"
      >
        <div class="book-button">
          <i class="bi bi-whatsapp" />
          Reach Us On WhatsApp
        </div>
      </Button>
    </div>
  </CardBody>
</Card>

<div style="max-width: 750px;width: 100%;">
  <Discover />
</div>

<style lang="scss">
  .image-cropper {
    width: 6em;
    height: 6em;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }
  .card-image {
    height: 100%;
    width: auto;
  }
  .card-header-title {
    font-style: italic;
    width: 70%;
    padding-left: 10px;
  }
  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffe9dd;
    padding: 1rem 1rem;
  }
  .about-banner {
    width: 100%;
    height: 150px;
    background: linear-gradient(
      45deg,
      rgb(255, 38, 0, 0.75),
      rgba(255, 255, 0, 0.75)
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-body {
    padding: 1rem;
    text-align: justify;
  }
</style>
