<script lang="ts">
    import { unit } from "$lib/store";
    import { slide } from "svelte/transition";
</script>

{#if $unit}
    <div
        transition:slide
        class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xl max-md:text-sm font-semibold"
    >
        <p>UNIT{$unit.index} - {$unit.name}</p>
    </div>
{/if}
