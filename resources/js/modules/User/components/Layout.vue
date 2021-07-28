<template>
  <div class="wrapper">
    <Sidebar />
    <div class="main">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>
<script>
import sBar from 'core/utils/sidebarToggle.js';
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
  },
  mounted () {
    sBar.sidebarToggle();
  },
};
</script>
