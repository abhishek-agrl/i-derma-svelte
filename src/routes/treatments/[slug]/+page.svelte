<script lang="ts">
  import {
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Button,
    Breadcrumb,
    BreadcrumbItem
  } from "sveltestrap";
  export let data = {
    title: "",
    summary: "",
    list: [],
  };
</script>

<svelte:head>
  <title>I-Derma {data.title}</title>
</svelte:head>

<div class="treatments-banner">
  <h1>{data.title}</h1>
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="/">Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="/treatments">Treatments</a>
    </BreadcrumbItem>
    <BreadcrumbItem active><span>{data.title}</span></BreadcrumbItem>
  </Breadcrumb>
</div>

<div class="treatments-body">
  <p>{data.summary}</p>
  <Card style="height: 100%;">
    <CardHeader>
      <h3>
        <i
          class="bi bi-clipboard-heart"
          style="font-size: 1em; margin-right:5px; color:crimson"
        />Find Your Treatment
      </h3>
    </CardHeader>
    <CardBody>
      <ListGroup flush style="height:100%;justify-content:space-evenly;">
        {#each data.list as listItem}
          <!-- <ListGroupItem tag="a" href={listItem.href} action> -->
          <ListGroupItem>
            <h4 class="service-links">
              <i class="bi bi-chevron-right" />
              {listItem.title}
            </h4>
          </ListGroupItem>
        {/each}
      </ListGroup>
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
            Book Appointment Today!
          </div>
        </Button>
      </div>
    </CardBody>
  </Card>
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
    flex-direction: column;
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
  a{
    color: unset;
    font-style: italic;
  }
  span{
    color: unset;
    font-style: italic;
  }
</style>
