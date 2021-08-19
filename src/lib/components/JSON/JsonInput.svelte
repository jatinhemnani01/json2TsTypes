<script lang="ts">
  import { JsonInput } from "$lib/stores/Json";
  import { TextArea } from "carbon-components-svelte";
</script>

<main>
  <TextArea
    placeholder="Enter JSON Here"
    style="resize: none; height: 60vh; outline: none;"
    bind:value={$JsonInput}
  />
</main>
