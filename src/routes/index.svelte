<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Json from "$lib/components/JSON/Json.svelte";
  import Types from "$lib/components/Types/Types.svelte";
  import { Button } from "carbon-components-svelte";
  import { JsonInput } from "$lib/stores/Json";
  import { TypesInput } from "$lib/stores/Types";
  import { json2ts } from "json-ts";
</script>

<main class="body">
  <div class="left-side"><Json /></div>
  <div class="right-side"><Types /></div>
</main>

<div class="convert-cont">
  <Button
    on:click={() => {
      try {
        const jsJSON = `${$JsonInput}`;
        const finalTypes = json2ts(jsJSON);
        $TypesInput = finalTypes;
      } catch (error) {
        $TypesInput = "Error Occured Because of Wrong JSON";
      }
    }}
    style="padding: 15px;"
    kind="danger-tertiary">Convert</Button
  >
</div>

<style>
  .body {
    display: flex;
    padding: 2em;
  }

  .left-side {
    flex: 1;
    background-color: darkred;
    border-right: solid 1px white;
  }

  .right-side {
    flex: 1;
    background-color: teal;
  }

  .convert-cont {
    display: flex;
    justify-content: center;
  }
</style>
