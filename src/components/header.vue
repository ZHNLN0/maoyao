<template>
  <div class="header">
    <div class="header-left" @click="back">
      <slot name="left"></slot>
    </div>
    <div class="header-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.header
  background-color #e54847
  width 100%
  height px2rem(120px)
  color #ffffff
  font-weight 500
  font-size 18px
  &-left 
    width px2rem(50px)
    float left
    margin-left px2rem(20px)
    height px2rem(120px)
    text-align center
    line-height px2rem(120px)
  &-content 
    width 100%
    height px2rem(120px)
    text-align center
    line-height px2rem(120px)
</style>
