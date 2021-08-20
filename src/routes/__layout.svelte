<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "carbon-components-svelte/css/g100.css";
  import Seo from "$lib/components/Seo.svelte";
</script>

<!-- FOR SEO -->
<Seo />
<!-- FOR SEO -->

<Navbar />
<Heading />
<slot />
