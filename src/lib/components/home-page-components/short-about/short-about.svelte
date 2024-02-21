<script lang="ts">
  import { Card, CardBody, CardHeader } from "sveltestrap";
  import OurServicesComponent from "./our-services-component.svelte";

  let outerWidth = 0;
  $: isDesktop = outerWidth > 600;
  let aboutIdermaContent =
    "Situated in the heart of Raipur, I-Derma is an advanced skin clinic for Dermatology, Laser Skin Therapy, Aesthetic Surgery and much more. We offer safe and results-driven treatments under the guidance of Plastic Surgeons and Dermatologists to Unleash The New You...";
</script>

<svelte:window bind:outerWidth />

<div class="main-short-about">
  <h1>Skin Clinic & Hair Transplant Center</h1>
  <div class="card-container" class:isDesktop>
    <div class="about-iderma-card">
      <Card>
        <CardHeader>
          <h3 class="about-card-header-container">
            <i
              class="bi bi-heart-pulse-fill"
              style="font-size: 1em; margin-right:5px; padding-top: 4px; color:crimson;"
            />
            About I-Derma
          </h3>
        </CardHeader>
        <CardBody style="text-align:justify">
          {aboutIdermaContent}
        </CardBody>
      </Card>
    </div>
    <div class="about-iderma-card">
      <OurServicesComponent />
    </div>
  </div>
</div>

<style lang="scss">
  .main-short-about {
    display: flex;
    justify-content: left;
    padding: 2em;
    width: 100%;
    flex-direction: column;
  }
  .card-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .about-card-header-container {
    display: flex;
    align-items: center;
  }
  .about-iderma-card {
    padding: 5px;
  }
  .isDesktop {
    flex-direction: row;
    .about-iderma-card {
      width: 50%;
    }
  }
</style>
