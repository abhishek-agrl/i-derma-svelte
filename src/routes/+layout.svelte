<script lang="ts">
  import Navbar from "$lib/components/navbar/navbar.svelte";
  import Footer from "$lib/components/footer/footer.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Dancing+Script:wght@600&family=Noto+Sans+Syriac+Eastern&family=Playfair+Display:ital,wght@1,500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Navbar />
<div class="main-body">
  <slot />
</div>

<Footer />

<style>
  .main-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  :global(.card-header) {
    background-color: #ffe9dd !important;
    max-height: 58px;
  }
  :global(h3) {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    /* font-family: 'Noto Sans Syriac Eastern', sans-serif; */
    font-family: "Playfair Display", serif;
  }
  :global(h1) {
    font-family: "Playfair Display", serif;
  }
  :global(div) {
    font-family: "Crimson Text", serif;
  }
</style>
