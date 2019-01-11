<template>
  <div id="app">
    <Header></Header>
    <transition>
      <div class="container clearfloat">
        <div class="left">
          <router-view></router-view>
        </div>
        <div class="right">
          <router-view name="right"></router-view>
        </div>
      </div>
    </transition>
    <Footer></Footer>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import BackTop from '@/components/BackTop/BackTop'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BackTop
  }
}
</script>

<style scoped lang="less">
.container {
  width: 1152px;
  margin: 20px auto 0;
  .left {
    width: 832px;
    float: left;
  }
  .right{
    width: 300px;
    float: left;
    margin-left: 20px;
  }
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
