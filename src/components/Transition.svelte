<script>
  import { fly } from "svelte/transition";
  import { expoOut } from "svelte/easing";
  let width = screen.width;
</script>

<style>
  @media only screen and (max-width: 683px) {
    div {
      margin-bottom: 100px;
    }
  }
</style>

<div in:fly={{ x: -width, duration: 500, easing: expoOut }}>
  <slot />
</div>
