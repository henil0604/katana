import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { UNITS, type Unit } from "./config";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getUnitConfig(index: number) {
    return UNITS.at(index);
}

export function getCurrentUnit(pathname: string) {
    let id = pathname.substring(1);
    let index = UNITS.findIndex(unit => unit.id === id);
    return {
        index,
        unit: getUnitConfig(index)
    }
}
