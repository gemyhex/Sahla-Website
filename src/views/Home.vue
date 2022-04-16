<template>
  <v-container fluid class="home">
    <v-row>
      <v-col class="curve"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 1000px;
  .curve {
    min-height: calc(100vh - 80px);
    position: relative;
    background: linear-gradient(90deg, #f0027f, #75489f);
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: url('../assets/images/border.svg');
    }
  }
}
</style>
