export const VERSION_NAME = 'JUNE2023'

export type Unit = {
    name: string,
    id: string,
    index: number,
}

export const UNITS: Unit[] = [
    {
        name: "Welcome to KATANA",
        id: 'welcome',
        index: 0
    },
    {
        name: "String.reverse",
        id: 'string-dot-reverse',
        index: 1
    },
    {
        name: "btoa",
        id: 'btoa',
        index: 2
    }
]

export const DONE_ID = "done"