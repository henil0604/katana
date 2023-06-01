import { writable } from "svelte/store";
import type { Unit } from "$lib/config";

export const unit = writable<Unit | undefined>(undefined);