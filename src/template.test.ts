import { strict as test } from "assert";
import { template } from "./template";

const icon = template({
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    width: 32,
    height: 32,
  },
  content: [
    {
      elem: "path",
      attrs: {
        d:
          "M8 9H4a2 2 0 0 0-2 2V23H4V18H8v5h2V11A2 2 0 0 0 8 9zM4 16V11H8v5zM22 11L25 11 25 21 22 21 22 23 30 23 30 21 27 21 27 11 30 11 30 9 22 9 22 11zM14 23H12V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H14zm0-7h4V11H14z",
      },
    },
  ],
  moduleName: "Add32",
});

const expected = `<script>
  let className = undefined;
  export { className as class };
  export let id = undefined;
  export let tabindex = undefined;
  export let focusable = false;
  export let title = undefined;
  export let style = undefined;

  $: ariaLabel = $$props['aria-label'];
  $: ariaLabelledBy = $$props['aria-labelledby'];
  $: labelled = ariaLabel || ariaLabelledBy || title;
  $: attributes = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-hidden': labelled ? undefined : true,
    role: labelled ? 'img' : undefined,
    focusable: tabindex === '0' ? true : focusable,
    tabindex
  };
</script>

<svg
  data-carbon-icon="Add32"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M8 9H4a2 2 0 0 0-2 2V23H4V18H8v5h2V11A2 2 0 0 0 8 9zM4 16V11H8v5zM22 11L25 11 25 21 22 21 22 23 30 23 30 21 27 21 27 11 30 11 30 9 22 9 22 11zM14 23H12V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H14zm0-7h4V11H14z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>`;

test.equal(icon, expected);
