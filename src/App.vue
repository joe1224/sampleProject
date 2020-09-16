<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  body {
    overflow-x: hidden;
  }
  html,body{
    height:100% ;margin:0;
    overflow-x: hidden;
  }
</style>
