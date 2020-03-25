<script>
  import { fly } from "svelte/transition";
  import { expoOut } from "svelte/easing";
  export let x = screen.width;
  export let y = 0;
</script>

<style>
  @media only screen and (max-width: 683px) {
    div {
      margin-bottom: 100px;
    }
  }
</style>

<div in:fly={{ x: -x, y: -y, duration: 500, easing: expoOut }}>
  <slot />
</div>
