<template>
  <span class="click-to-select">
    <slot></slot>
  </span>
</template>

<style>
.click-to-select {
  -webkit-user-select: all; /* Chrome 49+ */
  -moz-user-select: all; /* Firefox 43+ */
  -ms-user-select: all; /* No support yet */
  user-select: all; /* Likely future */
}
</style>
