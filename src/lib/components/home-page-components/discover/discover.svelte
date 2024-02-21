<script lang="ts">
  import { Card, CardBody, CardHeader, Button } from "sveltestrap";
  import Instagram from "./instagram.svelte";
  import Facebook from "./facebook.svelte";
  let outerWidth = 0;
  $: condition = outerWidth <= 370;
  $: isDesktop = outerWidth > 800;
</script>

<svelte:window bind:outerWidth />

<div class="discover-cards-container" class:isDesktop>
  <!--Instagram Card -->
  <div class="discover-cards">
    <Card style="width: 100%; height:100%">
      <CardHeader>
        <div style="display: flex; align-items: center;}" hidden={condition}>
          <h3>
            <i
              class="bi bi-instagram"
              style="font-size: 1.5rem; margin-right: 5px; color: #e1306c"
            /> Follow Us on Instagram
          </h3>
        </div>
        <a
          style="color: #e1306c;"
          href="https://www.instagram.com/idermabydranshul/"
          hidden={!condition}
          target="_blank"
          ><div style="display: flex; align-items: center;}">
            <i
              class="bi bi-instagram"
              style="font-size: 1.5rem; margin-right: 5px"
            /> Follow Us on Instagram
          </div></a
        >
      </CardHeader>
      <div hidden={condition}>
        <CardBody style="display:flex; justify-content:center;">
          <Instagram />
        </CardBody>
      </div>
    </Card>
  </div>

  <!--Facebook Card -->
  <div class="discover-cards">
    <Card style="width: 100%; height:100%">
      <CardHeader>
        <div style="display: flex; align-items: center;}" hidden={condition}>
          <h3>
            <i
              class="bi bi-facebook"
              style="font-size: 1.5rem; margin-right: 5px; color: #4267B2;"
            /> Follow Us on Facebook
          </h3>
        </div>

        <a
          href="https://www.facebook.com/idermabydranshul/"
          hidden={!condition}
          target="_blank"
          ><div style="display: flex; align-items: center;}">
            <i
              class="bi bi-facebook"
              style="font-size: 1.5rem; margin-right: 5px"
            /> Follow Us on Facebook
          </div></a
        >
      </CardHeader>
      <div hidden={condition}>
        <CardBody style="display:flex; justify-content:center;">
          <Facebook />
        </CardBody>
      </div>
    </Card>
  </div>
</div>

<style lang="scss">
  .discover-cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .discover-cards {
    display: flex;
    justify-content: center;
    width: 90%;
    margin-top: 10px;
  }
  .isDesktop{
    flex-direction: row;
    justify-content: space-evenly;
    height: 650px;
    margin-top: 20px;
    .discover-cards{
      max-width: 400px;
      height: 100%;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
</style>
