<template>
    <div>
        <div class="intro">
            <h2>博主简介</h2>
            <ul>
                <i>
                    <img src="http://www.yangqq.com/skin/show/images/4.jpg" alt="">
                </i>
                <p>
                    <b>XXX</b>，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板。
                </p>
            </ul>
        </div>
        <Tag></Tag>
        <Blogroll></Blogroll>
        <Contact></Contact>
    </div>
</template>

<script>
import Tag from '@/components/Tag/Tag'
import Blogroll from '@/components/Blogroll/Blogroll'
import Contact from '@/components/Contact/Contact'
export default {
  name: 'Intro',
  components: {
    Tag,
    Blogroll,
    Contact
  }
}
</script>

<style scoped lang="less">
.intro {
  background: #fff;
  margin-bottom: 20px;
  overflow: hidden;
  height: 194px;
  border-radius: 7px;
  //   margin-top: 20px;
  h2 {
    color: #000;
    font-size: 18px;
    line-height: 46px;
    padding-left: 20px;
    background: #fff;
  }
  ul {
    padding: 10px;
    overflow: hidden;
    i {
      width: 120px;
      float: left;
      clear: left;
      margin-right: 10px;
      height: 90px;
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 10%;
      }
    }
    p {
      line-height: 24px;
      font-size: 14px;
    }
  }
}
</style>
