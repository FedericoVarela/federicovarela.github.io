import { writable } from "svelte/store";

export const activeStore = writable("Home");

export const projectStore = writable(null);