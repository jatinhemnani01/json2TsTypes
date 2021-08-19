<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Json from "$lib/components/JSON/Json.svelte";
  import { JsonInput } from "$lib/stores/Json";
  import { Button } from "carbon-components-svelte";
</script>

<main class="body">
  <div class="left-side"><Json /></div>
  <div class="right-side">Flex 2</div>
</main>

<div class="convert-cont">
  <Button style="padding: 15px;" kind="danger-tertiary">Convert</Button>
</div>

<style>
  .body {
    display: flex;
    padding: 2em;
  }

  .left-side {
    flex: 1;
    background-color: darkred;
  }

  .right-side {
    flex: 1;
    background-color: darkblue;
  }

  .convert-cont {
    display: flex;
    justify-content: center;
  }
</style>
