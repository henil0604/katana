<script>
    import { Input } from "$components/ui/input";
    import { Button } from "$components/ui/button";
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from "$components/ui/card";
    import { unit } from "$lib/store";
    import { getUnitConfig } from "$lib/utils";
    import { DONE_ID } from "$lib/config";

    export let answer = "";

    let input = "";

    let done = false;
    let valid = true;

    function handleSubmit() {
        if (
            input.toLocaleLowerCase() === `KCTF{${answer}}`.toLocaleLowerCase()
        ) {
            valid = true;
            done = true;
        } else {
            valid = false;
            done = false;
        }
    }

    function getNextUnit() {
        if (!$unit) return null;
        let currentIndex = $unit.index;
        if (!currentIndex) return null;
        let next = getUnitConfig(currentIndex + 1);
        if (!next) {
            return { id: `${DONE_ID}` };
        }
        return next;
    }
</script>

<Card class="min-w-[400px] max-md:min-w-full">
    {#if !done}
        <CardHeader>
            <CardTitle>did you solve this?</CardTitle>
        </CardHeader>
    {/if}
    <CardContent>
        {#if !done}
            <Input
                bind:value={input}
                on:keypress={(e) => e.keyCode === 13 && handleSubmit()}
                type="text"
                placeholder={`KCTF{______}`}
                class={!valid ? "border-red-500" : ""}
            />
            {#if !valid}
                <p class="text-sm text-muted-foreground">Invalid Flag.</p>
            {/if}
        {:else}
            <!-- Success -->
            <div class="flex-center flex-col p-3 gap-2">
                <h3 class="text-base lg:text-xl font-semibold tracking-tight">
                    You Did it!!!
                </h3>
                <Button href="/{getNextUnit()?.id}">Go to Next</Button>
            </div>
        {/if}
    </CardContent>
    {#if !done}
        <CardFooter class="justify-end">
            <Button on:click={handleSubmit}>Submit</Button>
        </CardFooter>
    {/if}
</Card>
