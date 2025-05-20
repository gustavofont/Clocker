<template>
  <div
    class="tagComponent"
    :class="`tag${tag}`"
  />
</template>

<script setup lang="ts">
import { TagType } from '@src/enums/tagEnum';
import { PropType } from 'vue';

defineProps({
  tag: {
    type: String as PropType<TagType>,
    required:true
  }
});
</script>

<style lang="scss">
.tagComponent {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: $light-grey-4;
}

.tagComponent.tagDefault {
  background-color: $tag-default;
}
.tagComponent.tagSchool {
  background-color: $tag-school;
}
.tagComponent.tagWork {
  background-color: $tag-work;
}
</style>