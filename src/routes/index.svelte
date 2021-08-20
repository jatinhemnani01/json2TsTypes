<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Json from "$lib/components/JSON/Json.svelte";
  import Types from "$lib/components/Types/Types.svelte";
  import { Button } from "carbon-components-svelte";
  import { JsonInput } from "$lib/stores/Json";
  import { TypesInput } from "$lib/stores/Types";
  import JsonToTS from "json-to-ts";

  function convertToTs() {
    try {
      let typesContainer = [];
      const finalMethod = JsonToTS(JSON.parse($JsonInput)).forEach((TI) => {
        typesContainer.push(TI);
      });
      let finalTypes = typesContainer.join("\n\n");
      $TypesInput = finalTypes;
    } catch (error) {
      $TypesInput = "Wrong JSON Format";
    }
  }
</script>

<div class="convert-cont">
  <Button
    on:click={convertToTs}
    style="padding: 15px; border-radius: 5px;"
    kind="danger-tertiary">Convert</Button
  >
</div>
<main class="body">
  <div class="left-side"><Json /></div>
  <div class="right-side"><Types /></div>
</main>

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
