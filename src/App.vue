<template>
<router-link to="/" >Home</router-link>
<router-link to="/about" >About</router-link>
<router-link to="/contact" >Contact</router-link>

<div class="container">
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>