<script lang="ts">
    import { onMount } from "svelte";

    export let styles: string;

    let element: HTMLDivElement;
    
    onMount(() => {
        const items = element.childNodes;
        const shadow_root = element.attachShadow({ mode: "open" });
        shadow_root.append(...items);

        if (styles) {
            const styleElement = document.createElement("style");
            styleElement.innerHTML = styles.replace(/:root/g, ":host"); //TA, we need to replace :root with :host to get styles work in shadowDOM
            shadow_root.append(styleElement);
        }
    });
</script>

<div bind:this={element}>
    <slot />
</div>
