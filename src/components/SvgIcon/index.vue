<template>
  <svg class="svg-icon-wrap" :style="iconStyle" aria-hidden="true" :class="`${name}-icon`">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed, CSSProperties } from 'vue'

interface SvgProps {
  name: string
  prefix?: string
  iconStyle?: CSSProperties
  color?: string
}
const props = withDefaults(defineProps<SvgProps>(), {
  prefix: 'icon',
  iconStyle: () => ({})
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style lang="scss" scoped>
.svg-icon-wrap {
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
}
</style>
