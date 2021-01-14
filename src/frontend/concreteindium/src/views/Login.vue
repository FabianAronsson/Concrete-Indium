<template>
    <div id="particles-js">
        <div class="formContainer">
                <h1>Welcome</h1>
            <form action="/login" method="post">
                <label for="email">Email</label><br><br>
                <input type="text"  id="email" name="email" placeholder="name@domain.com"><br><br><br>
                <label for="password">Password</label><br><br>
                <input type="password" id="password" name="password" placeholder="Secure password"><br><br>
                <input type="submit" value="Login" id="loginBtn">
            </form>

        </div>
    </div>
</template>

<script src="particles.js"></script>

<style lang="scss">

</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// @ts-ignore
import particles from 'particles.js';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Login extends Vue {
    
  //mounted():void{
    //particles.load('particles-js', '../assets/particles.json', () =>  {
      //console.log('callback - particles-js config loaded');
   // });
  //}
}
</script>
