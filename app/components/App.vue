<template>
    <div id="content">
        <h5>Time to <a href="https://hub.openrainbow.com/">Play with SDK and APIs</a>.</h5>
        <p>Version <span> {{ version }} </span></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            version: rainbowSDK.version()
        }
    }
}
</script>

