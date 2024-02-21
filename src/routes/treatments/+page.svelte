<script>
  import OurServicesComponent from "$lib/components/home-page-components/short-about/our-services-component.svelte";
  let pageIntro =
    "At I-Derma, your medical and skin care needs are our priority. We specialize in a wide range of treatments, from Laser Hair Reduction, Laser Vein Treatment, Skin Rejuvenation, Acne and Acne Scarring treatments, to the most innovative anti-ageing treatments in the world. Experienced and qualified doctors carry out our injectable treatments, with our skincare packages tailored to suit clients' skin concerns.";
</script>

<svelte:head>
  <title>I-Derma Treatments</title>
</svelte:head>

<div class="treatments-banner">
  <h1>Available Treatments</h1>
</div>

<div class="treatments-body">
  <p>{pageIntro}</p>
  <OurServicesComponent />
</div>

<style>
  .treatments-banner {
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
  .treatments-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    padding: 1.5em;
    max-width: 750px;
  }
</style>
