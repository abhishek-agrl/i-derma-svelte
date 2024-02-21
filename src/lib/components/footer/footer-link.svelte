<script lang="ts">
  export let iconClass = "";
  export let linkUrl = "";
  export let linkText = "";
</script>

<div class="footer-link">
  <div class="left-portion">
    <i class={iconClass} />
  </div>
  <div class="right-portion">
    <a href={linkUrl} target="_blank">
      {linkText}
    </a>
  </div>
</div>

<style>
  .footer-link {
    display: flex;
    flex-direction: row;
    margin-bottom: 3px;
  }
  a {
    color: unset;
    text-decoration: unset;
  }
  i {
    margin-right: 5px;
  }
  .email {
    color: white;
  }
  .phone {
    color: #34b7f1;
  }
  .whatsapp {
    color: #25d366;
  }
  .facebook {
    color: #4267b2;
  }
  .instagram {
    color: #e1306c;
  }
  .location {
    color: crimson;
  }
</style>
