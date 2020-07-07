<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<h2>Rainbow Web SDK v{{ version }}</h2>
  </div>
</template>

<script>
import rainbowSDK from 'rainbow-web-sdk';


var onReady = function onReady() {
    console.log('[Hello World] :: On SDK Ready !');
	rainbowSDK.connection.signin('loginEmail', 'password').then(user => {
		return user
	}).catch(err => { 
		console.log(err) 
	})
};

var onLoaded = function onLoaded() {
    console.log('[Hello World] :: On SDK Loaded !');

    rainbowSDK
        .initialize('appId', 'appSecret')
        .then(() => {
            console.log('[Hello World] :: Rainbow SDK is initialized!');
        })
        .catch(err => {
            console.log('[Hello World] :: Something went wrong with the SDK.', err);
        });
};
/* Listen to the SDK event RAINBOW_ONREADY */
document.addEventListener(rainbowSDK.RAINBOW_ONREADY, onReady)
/* Listen to the SDK event RAINBOW_ONLOADED */
document.addEventListener(rainbowSDK.RAINBOW_ONLOADED, onLoaded)
/* Load the SDK */
rainbowSDK.load();

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
	return {
	  version: rainbowSDK.version()
	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
