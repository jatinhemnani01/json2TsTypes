<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Json from "$lib/components/JSON/Json.svelte";
</script>

<main class="body">
  <div class="left-side"><Json /></div>
  <div class="right-side">Flex 2</div>
</main>

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
</style>
