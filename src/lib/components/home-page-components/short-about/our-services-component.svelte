<script>
  import {
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
  } from "sveltestrap";
</script>

<Card style="height: 100%;">
  <CardHeader>
    <h3>
      <i
        class="bi bi-clipboard-heart"
        style="font-size: 1em; margin-right:5px; color:crimson"
      />Our Services
    </h3>
  </CardHeader>
  <CardBody>
    <ListGroup flush style="height:100%;justify-content:space-evenly;">
      <ListGroupItem tag="a" href="/treatments/hair" action>
        <h4 class="service-links">
          <i class="bi bi-chevron-right" />
          Hair Treatments
        </h4>
      </ListGroupItem>
      <ListGroupItem tag="a" href="/treatments/skin" action>
        <h4 class="service-links">
          <i class="bi bi-chevron-right" />
          Skin Treatments
        </h4>
      </ListGroupItem>
      <ListGroupItem tag="a" href="/treatments/body" action>
        <h4 class="service-links">
          <i class="bi bi-chevron-right" />
          Body Treatments
        </h4>
      </ListGroupItem>
    </ListGroup>
  </CardBody>
</Card>

<style>
  .service-links:hover {
    color: goldenrod;
    cursor: pointer;
  }
  :global(.list-group-item) {
    border-width: 0 0 0 !important;
  }
</style>
