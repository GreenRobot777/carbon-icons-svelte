<script lang="ts">
  import { Add16 } from "../lib";
  import Icon from "../lib/Accessibility16";

  const icon = new Icon({ target: document.body, props: { focusable: true } });

  $: console.log(icon.$$prop_def);
</script>

<Add16
  title="Title"
  fill="red"
  on:click={(e) => {
    console.log(e);
  }}
/>

<Icon title="Title" />
