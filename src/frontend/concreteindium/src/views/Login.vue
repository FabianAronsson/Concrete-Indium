<template>
    <div class="mainLogin">
        <div class="formContainer">
                <h1>Welcome</h1>
            <form action="" method="post">
                <label for="email">Email</label><br><br>
                <input type="text"  id="email" name="email" placeholder="name@domain.com"><br><br><br>
                <label for="password">Password</label><br><br>
                <input type="password" id="password" name="password" placeholder="Secure password">
            </form>

            <button>Login</button>
        </div>
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