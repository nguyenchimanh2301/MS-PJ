<template>
   <div class="contain contains">
    <TheSidebar/>
    <TheContent/>
    <MPaging/>
   </div>
</template>

<script>
// import TheHeader from './view/layout/TheHeader.vue';
import TheContent from './view/layout/TheContent.vue';
import TheSidebar from './view/layout/TheSidebar.vue';
export default {
  name: 'App',
  components: {
    // TheHeader,
    TheContent,
    TheSidebar,
}
}
</script>
<style>
@import url('./css/main.css');
</style>
