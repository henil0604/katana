<script>
    import Submitter from "$components/ui/Submitter.svelte";
    import { unit } from "$lib/store";

    let answer = btoa("katana");
</script>

<svelte:head>
    <title>UNIT{$unit?.index} - Katana</title>
</svelte:head>

<div class="w-full h-full flex flex-col items-center py-10 pt-32 px-2">
    <h1 class="text-5xl font-extrabold tracking-tight lg:text-7xl">
        {$unit?.name}
    </h1>
    <div class="mt-2" />
    <h3 class="text-base lg:text-xl font-semibold tracking-tight">
        what about passing "katana"
    </h3>
    <div class="mt-10" />

    <Submitter {answer} />
</div>
