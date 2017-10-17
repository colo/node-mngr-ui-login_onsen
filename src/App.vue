<template>
  <div id="app">
		<ons-page>
      <ons-toolbar>
        <div class="center">Log In</div>
        <div class="right"><ons-toolbar-button>Close</ons-toolbar-button></div>
      </ons-toolbar>

      <div class="login-form">
				<form novalidate @submit="onSubmit">
        <input input-id="username" v-model="username" type="username" class="text-input--underbar" placeholder="Username" value="">
        <input input-id="password" v-model="password" type="password" class="text-input--underbar" placeholder="Password" value="">
        <br><br>
        <button type="submit" modifier="large" class="button login-button">Log In</button>
        <br><br>
        <ons-button modifier="quiet" class="forgot-password">Forgot password?</ons-button>
        </form>
      </div>

    </ons-page>
	</div>
</template>

<script src='./models/login.js'></script>

<style src="onsenui/css/onsenui.css"></style>
<style src="onsenui/css/onsen-css-components.css"></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login-form {
  text-align: center;
  width: 80%;
  margin: 60px auto 0;
}

input[type=username], input[type=password] {
  display: block;
  width: 100%;
  margin: 0 auto;
  outline: none;
  height: 100%;
  padding-top: 15px;
  padding-bottom: 16px;
}

.login-button {
  width: 100%;
  margin: 0 auto;
}

.forgot-password {
  display: block;
  margin: 8px auto 0 auto;
  font-size: 14px;
}

</style>
