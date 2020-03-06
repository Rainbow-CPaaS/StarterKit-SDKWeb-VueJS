<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<h2>Rainbow Web SDK v{{ version }}</h2>
  </div>
</template>

<script>
import rainbowSDK from 'rainbow-web-sdk';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
	return {
	/* rainbowSDK object is accessible in this component */
    version: rainbowSDK.version()
    }
  }
}
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
