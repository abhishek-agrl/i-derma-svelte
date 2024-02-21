<script lang="ts">
  import { Carousel, CarouselControl, CarouselItem } from "sveltestrap";

  const items = [
    {
      class: "primary",
      title: "ANTI AGING",
      subTitle: "Preserve Natural Youthful Beauty",
      // url: "/treatments/anti-aging",
      url: "/treatments/skin"

    },
    {
      class: "primary",
      title: "DERMA FILLERS",
      subTitle: "Enhance Facial Lines",
      // url: "/treatments/skin/derma-fillers",
      url: "/treatments/skin"
    },
    {
      class: "primary",
      title: "PRP THERAPY",
      subTitle: "Stimulate Hair Growth",
      // url: "/treatments/hair/prp-therapy",
      url: "/treatments/hair"
    },
    {
      class: "primary",
      title: "TATTOO REMOVAL",
      subTitle: "Permanent Tattoo And Mole",
      // url: "/treatments/skin/tattoo-removal",
      url: "/treatments/skin"
    },
    {
      class: "primary",
      title: "SKIN REJUVENATION",
      subTitle: "Pigment & Scar Removal",
      // url: "/treatments/skin/skin-rejuvenation",
      url: "/treatments/skin"
    },
  ];
  let activeIndex = 0;
</script>

<Carousel class="slide" {items} bind:activeIndex style="width:100%;">
  <div class="carousel-inner">
    {#each items as item, index}
      <CarouselItem bind:activeIndex itemIndex={index}>
        <div class={"d-block w-100 carousel-inner-item" + ` ${item.class}`}>
          <h2>{item.title}</h2>
          <h3>{item.subTitle}</h3>
          <a href={item.url}>
            <button
              type="button"
              class="btn btn-primary"
              style="color: #ffe9dd;">Learn More</button
            >
          </a>
        </div>
      </CarouselItem>
    {/each}
  </div>

  <CarouselControl direction="prev" bind:activeIndex {items} />
  <CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>

<style>
  .carousel-inner-item {
    height: 500px;
    padding: 20%;
  }
  .primary {
    background: linear-gradient(
      45deg,
      rgba(255, 38, 0, 0.75),
      rgba(255, 255, 0, 0.75)
    );
  }
  .btn-primary {
    background-color: rgba(255, 38, 0, 0.75);
    border: unset;
  }
</style>
