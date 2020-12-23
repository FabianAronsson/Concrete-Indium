<template>
    <div class="livechat-grid-container">
        <div class="server-info livechat-grid-item">server info</div>
        <div class="server-scroll-list livechat-grid-item">server scroll list</div>
        <div class="server-header livechat-grid-item">server header</div>
        <div class="server-textfield livechat-grid-item">textfield</div>
        <div class="server-textinput livechat-grid-item">input field</div>
    </div>
</template>

<style lang="scss">
@import './../sass/livechat.scss';
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class LiveChat extends Vue {}
</script>