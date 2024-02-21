<script>
  import BookAppointment from "$lib/components/home-page-components/book-appointment/book-appointment.svelte";
  import Carousel from "$lib/components/home-page-components/carousel/carousel.svelte";
  import Discover from "$lib/components/home-page-components/discover/discover.svelte";
  import ShortAbout from "$lib/components/home-page-components/short-about/short-about.svelte";
</script>

<svelte:head>
  <title>I-Derma</title>
</svelte:head>

<Carousel />

<div class="main-body">
  <ShortAbout />
</div>

<BookAppointment />

<div class="main-body">
  <Discover />
</div>

<style>
  .main-body {
    max-width: 750px;
    width: 100%;
  }
</style>
