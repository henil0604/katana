<script lang="ts">
    import { Separator } from "$components/ui/separator";
    import { Button } from "$components/ui/button";
    import { getUnitConfig } from "$lib/utils";
    import { fade } from "svelte/transition";
    import type { Unit } from "$lib/config";
    import { unit } from "$lib/store";

    let instructions = [
        "Every Month the site gets updates with new Challenge.",
        "Each Challenge has few UNITS, A Unit is kind of like Small CTF Challenge.",
        "Keep in mind that each UNIT requires Different skills in-order to solve that UNIT.",
        "When you solve a UNIT. You will be shown a way to next UNIT.",
        "At the end of every Challenge, there is a email box where you can put your email and mark the Challenge as Done.",
        "At the Bottom Right of the page the version of the current challenge is shown.",
    ];
</script>

<svelte:head>
    <title>UNIT{$unit?.index} - Katana</title>
</svelte:head>

{#if $unit && $unit.index == 0}
    <div class="w-full h-full flex flex-col items-center py-10 pt-16">
        <h1 in:fade class="text-4xl font-extrabold tracking-tight lg:text-7xl">
            {$unit.name}
        </h1>
        <div class="mt-2" />
        <h3
            in:fade={{ delay: 1000 }}
            class="text-xl font-semibold tracking-tight"
        >
            We provide monthly dose of CTF challenges
        </h3>
        <div class="mt-6" />
        <Separator />
        <div class="mt-6" />
        <div
            class="w-1/2 max-md:w-full px-3 flex justify-center flex-col"
            in:fade={{ delay: 2000 }}
        >
            {#each instructions as instruction, i}
                <div
                    in:fade={{ delay: i * 1000 + 2000 }}
                    class="mb-3 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                    <span
                        class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"
                    />
                    <div class="space-y-1">
                        <p class="text-sm font-medium leading-none">
                            {instruction}
                        </p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="mt-6" />

        <div in:fade={{ delay: 2000 + instructions.length * 1000 }}>
            <Button href="/{getUnitConfig(1)?.id}">Go to Next UNIT</Button>
        </div>
    </div>
{/if}
