<script lang="ts">
  import { TypesInput } from "$lib/stores/Types";
  import { TextArea } from "carbon-components-svelte";
</script>

<main>
  <TextArea
    style="resize: none; height: 60vh; outline: none;"
    bind:value={$TypesInput}
  />
</main>
