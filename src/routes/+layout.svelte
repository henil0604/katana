<script lang="ts">
    import { page } from "$app/stores";
    import UnitDetails from "$components/UnitDetails.svelte";
    import { VERSION_NAME } from "$lib/config";
    import { onMount } from "svelte";
    import "../app.postcss";
    import { unit } from "$lib/store";
    import { getCurrentUnit } from "$lib/utils";

    page.subscribe(() => {
        let path = $page.url.pathname;
        if (path === "/") return;
        let currentUnit = getCurrentUnit($page.url.pathname).unit;
        unit.set(currentUnit);
    });
</script>

<slot />

<div class="fixed bottom-0 right-0">
    <code
        class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xl font-semibold"
    >
        {VERSION_NAME}
    </code>
</div>

<div class="fixed top-0 right-0">
    <UnitDetails />
</div>
