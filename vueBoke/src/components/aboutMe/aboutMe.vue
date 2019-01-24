<template>
    <div class="aboutMe">
        <h2>博主简介</h2>
        <div class="intro">
            <span> 杨青，女，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。我入行早，大家也亲切的叫我“青姐”。
            </span>
        </div>
        <aboutTab></aboutTab>
    </div>
</template>

<script>
import aboutTab from '@/components/aboutTab/aboutTab'
export default {
  name: 'aboutMe',
  components: {
    aboutTab
  }
}
</script>

<style scoped lang="less">
.aboutMe {
  height: auto;
  background: #fff;
  overflow: hidden;
  padding:20px 50px 100px;
  h2 {
    padding: 20px 0 20px 0;
    font-weight: bold;
    font-size: 22px;
  }
  .intro{
      span{
          line-height: 1.5;
          font-size: 15px;
      }
  }
}
</style>
