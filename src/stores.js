import { writable } from "svelte/store";

export const activeStore = writable("Landing");
export const projectStore = writable(null);
export const langStore = writable("en");