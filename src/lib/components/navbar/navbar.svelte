<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "sveltestrap";
  import bigLogo from "$lib/assets/complete_logo.jpg";

  let isOpen = false;

  function handleUpdate(event: any) {
    isOpen = event.detail.isOpen;
  }

  function handleNavClick() {
    isOpen = false;
  }
</script>

<Navbar color="white" light expand="md">
  <NavbarBrand href="/" on:click={handleNavClick}>
    <img src={bigLogo} alt="I-Derma" style="height: 100px;" />
  </NavbarBrand>
  <NavbarToggler
    on:click={() => (isOpen = !isOpen)}
    style="border-color: transparent;"
  >
    <i class="bi bi-list" hidden={isOpen} style="font-size: 35px;" />
    <i class="bi bi-x-lg" hidden={!isOpen} style="font-size: 35px;" />
  </NavbarToggler>
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="/about" on:click={handleNavClick}>
          <span class="navbar-option"> About Dr. Anshul </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/treatments" on:click={handleNavClick}>
          <span class="navbar-option"> Treatments </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://wa.me/916263722729" target="_blank">
          <span class="navbar-option whatsapp-link">
            Book Appointment <i class="bi bi-whatsapp whatsapp" />
          </span>
        </NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>

<style>
  .navbar-option {
    color: #6f7374;
    font-weight: 700;
    font-size: larger;
    border: 0 0 0 1 #6f7374;
  }
  .whatsapp-link:hover {
    color: green !important;
  }
  :global(.btn-secondary:focus) {
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }
</style>
