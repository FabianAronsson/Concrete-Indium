<template>
  <div class="main-livechat-container">
    <div class="server-info-container">

      <div class="server-info">
        <h1>Lorem ipsum dolor sit MMM MMMMMM MMMM</h1>
        <h2>sample text sample text sample text sample text</h2>
      </div>

      <div class="server-list-container">
        <div class="server-list-item">example server</div>
        <div class="server-list-item">example server</div>
        <div class="server-list-item">example server</div>
        <div class="server-list-item">example server</div>
        <div class="server-list-item">example server</div>
        <div class="server-list-item">example server</div>
        <div class="server-list-item">example server</div>
      </div>
    </div>

    <div class="textfield-container">

      <div class="textfield-header">
        <img src="./../assets/fat_mario.gif" alt="fat_mario">
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
      </div>
      
      <div class="message-container">
        <div class="message">
          <img src="./../assets/fat_mario.gif" alt="fat_mario">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit ipsam magni deleniti</p>
        </div>
        <div class="message">
          <img src="./../assets/fat_mario.gif" alt="fat_mario">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit ipsam magni deleniti dignissimos dolor numquam repellendus, fugiat, incidunt quam eligendi dolore maxime est at quas delectus id, cumque perferendis.</p>
        </div>
        <div class="message">
          <img src="./../assets/fat_mario.gif" alt="fat_mario">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit ipsam magni deleniti dignissimos dolor numquam repellendus, fugiat, incidunt quam eligendi dolore maxime est at quas delectus id, cumque perferendis.</p>
        </div>
        <div class="message">
          <img src="./../assets/fat_mario.gif" alt="fat_mario">
          <p>Lorem ipsum dolor sit amet con, fugiat, incidunt quam eligendi dolore maxime est at quas delectus id, cumque perferendis.</p>
        </div>
        <div class="message">
          <img src="./../assets/fat_mario.gif" alt="fat_mario">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit ipsam magni deleniti dignissimos dolor numquam repellendus, fugiat, incidunt quam eligendi dolore maxime est at quas delectus id, cumque perferendis.</p>
        </div>
        <div class="message">
          <img src="./../assets/fat_mario.gif" alt="fat_mario">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit ipsam magni deleniti dignissimos dolor numquam repellendus, fugiat, incidunt quam eligendi dolore maxime est at quas delectus id, cumque perferendis.</p>
        </div>
        <div class="message">
          <img src="./../assets/fat_mario.gif" alt="fat_mario">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit ipsam magni deleniti dignissimos dolor numquam repellendus, fugiat, incidunt quam eligendi dolore maxime est at quas delectus id, cumque perferendis.</p>
        </div>
        <div class="message">
          <img src="./../assets/fat_mario.gif" alt="fat_mario">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit ipsam magni deleniti dignissimos dolor numquam repellendus, fugiat, incidunt quam eligendi dolore maxime est at quas delectus id, cumque perferendis.</p>
        </div>
        <div class="message">
          <img src="./../assets/fat_mario.gif" alt="fat_mario">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit ipsam magni deleniti dignissimos dolor numquam repellendus, fugiat, incidunt quam eligendi dolore maxime est at quas delectus id, cumque perferendis.</p>
        </div>
      </div>


      <div class="message-inputfield">
        <form action="/livechat" method="POST">
          <input type="text" name="message" id="message">
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
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