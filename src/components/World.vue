<template>
  <div class="hotkey">⌘</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'World',
    props: {
        msg: String,
    },
})

</script>

<style scoped>
.hotkey {
  font-size: 10em;
}
</style>
