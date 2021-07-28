<template>
  <div class="distributor">
      <router-view/>
    <!-- <layout /> -->
  </div>
</template>

<script>
import Layout from './components/Layout.vue';

export default {
  name: 'MainApp',
  components: {
    Layout,
  },
};
</script>
