<script lang="ts">
    import {onMount} from "svelte";

    let element: HTMLDivElement;

    onMount(() => {
        const items = element.childNodes;
        const shadow_root = element.attachShadow({mode: "open"});
        shadow_root.append(...items);
    });
</script>

<div bind:this={element} >
    <slot />
</div>

