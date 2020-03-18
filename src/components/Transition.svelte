<script>
    import { fly } from 'svelte/transition';
    import { expoOut } from 'svelte/easing';
    let width = screen.width;
</script>


<div in:fly="{{ x: -width, duration: 500, easing: expoOut  }}">
    <slot></slot>
</div>