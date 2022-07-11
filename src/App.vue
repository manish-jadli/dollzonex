<template>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Logo</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container">
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>