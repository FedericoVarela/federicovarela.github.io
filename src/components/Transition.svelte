<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { expoOut } from "svelte/easing";
  
  export let x = screen.width;
  export let y = 0;

  onMount(() => window.scrollTo(0, 0));
</script>

<div in:fly={{ x: -x, y: -y, duration: 500, easing: expoOut }} class="wrapper" style="padding-bottom: 5em;">
  <slot />
</div>
