<script lang="ts">
    import { Button } from "$components/ui/button";
    import { getUnitConfig } from "$lib/utils";
</script>

<svelte:head>
    <title>Katana - CTF Reincarnated</title>
</svelte:head>

<div class="w-full h-full flex flex-col items-center py-10 pt-32">
    <h1 class="text-5xl font-extrabold tracking-tight lg:text-7xl">Katana</h1>
    <div class="mt-2" />
    <h3 class="text-base lg:text-xl font-semibold tracking-tight">
        CTF Reincarnated
    </h3>
    <div class="mt-5" />
    <Button size="lg" href="/{getUnitConfig(0)?.id}">Get Started</Button>
</div>
