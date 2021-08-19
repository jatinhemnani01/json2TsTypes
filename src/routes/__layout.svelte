<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "carbon-components-svelte/css/g100.css";
</script>

<Navbar />
<Heading />
<slot />
