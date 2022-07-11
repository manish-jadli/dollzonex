<template>
  <div class="hello">
    <h1>About Screen!</h1>
    <p>Content here...</p>
    <button type="button" class="btn btn-lg btn-danger">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    aboutmsg: String,
    aboutheaderParagraph:String
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
