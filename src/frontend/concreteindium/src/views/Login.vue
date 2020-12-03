<template>
    <div class="formContainer">
            <h1>hej</h1>
        <form action="" method="post">
            <label for="email">Email</label>
            <input type="text"  id="email" name="email" placeholder="Yourname@domainName.com"><br>
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
        </form>

    </div>
    
</template>
<style lang="scss">



</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Login extends Vue {}
</script>