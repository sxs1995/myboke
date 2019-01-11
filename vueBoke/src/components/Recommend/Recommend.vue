<template>
    <div class="recommend">
        <ul>
            <li v-for="(item,index) in lists" :key="index">
                <i>
                    <img :src="item.img" alt="">
                </i>
                <h2>{{item.name}}</h2>
                <span>{{item.type}}</span>
            </li>
        </ul>
        <Intro></Intro>
    </div>
</template>

<script>
import Intro from '@/components/Intro/Intro'
export default {
  name: 'recommoned',
  components: {
    Intro
  },
  data () {
    return {
      lists: [{
        img: 'http://www.yangqq.com/d/file/blogs/2018-06-11/372b79556c82ac59a8c46eda53f177c4.jpg',
        name: '第二届 优秀个人博客模板比赛参选活动',
        type: '博客日记'
      }, {
        img: 'http://www.yangqq.com/d/file/blogs/2018-06-11/372b79556c82ac59a8c46eda53f177c4.jpg',
        name: '第二届 优秀个人博客模板比赛参选活动',
        type: '博客日记'
      }]
    }
  }
}
</script>

<style scoped lang="less">
.recommend {
  width: 100%;
  overflow: hidden;
  height: auto;
  ul {
    li {
      width: 100%;
      background: #000;
      position: relative;
      overflow: hidden;
      height: 196px;
      cursor: pointer;
      i {
        display: block;
        opacity: 0.95;
        -moz-transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
        overflow: hidden;
        img {
          width: 100%;
          height: 196px;
        }
      }
      h2 {
        color: #fff;
        display: block;
        font-weight: normal;
        font-size: 16px;
        position: absolute;
        bottom: 0;
        padding: 5px 10px;
        left: 0;
        right: 0;
        background: url("http://www.yangqq.com/skin/show/images/tbg.png")
          repeat-x;
      }
      span {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 6px 10px;
        background: rgba(246, 90, 138, 0.8);
        font-size: 12px;
        display: block;
        color: #fff;
        border-radius: 3px;
      }
    }
    li:hover i {
      opacity: 1;
    }
    li:last-child {
      margin-top: 16px;
    }
  }
}
</style>
