<template>
<h2>Logout successfully.</h2>
<p>If you want to again login then please click this <router-link to="/login">link</router-link></p>

</template>


<script>
export default {
  name: 'LogOut',
  props: {
    homemsg: String,
    homeheaderParagraph:String
  }
}
</script>