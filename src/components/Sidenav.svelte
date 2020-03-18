<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  const progress = tweened(0, {
    duration: 300,
    easing: cubicOut
  });
</script>

<div>
  <!-- <a href="#">Pito</a> -->
</div>
