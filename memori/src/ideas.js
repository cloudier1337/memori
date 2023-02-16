import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export let ideas = [];

ideas = derived(apiData, ($apiData) => {
  if ($apiData.results){
    return $apiData.results.map(idea => idea.quote + " - " + idea.author);
  }
  return [];
});