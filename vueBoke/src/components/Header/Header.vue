<template>
  <div class="header">
    <div class="nav clearfloat">
      <div class="leftNav">
        <a href="/home">个人博客</a>
      </div>
      <div class="rightNav">
        <ul>
          <li>
            <router-link to="/home" >网站首页</router-link>
          </li>
          <!-- <li>
            <router-link to="/blog">博客日记</router-link>
          </li> -->
          <li>
            <router-link to="/blogList">学无止境</router-link>
          </li>
          <li>
            <router-link to="/aboutMe">关于我</router-link>
          </li>
          <li>
            <router-link to="/timeLine">时间轴</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.header {
  height: 60px;
  line-height: 60px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
  .nav {
    height: 100%;
    width: 1152px;
    margin: 0 auto;
    .leftNav {
      font-size: 22px;
      float: left;
      height: 100%;
      a {
        color: #555;
      }
    }
    .rightNav {
      float: left;
      margin-left: 50px;
      ul {
        height: 60px;
        li {
          float: left;
          width: 100px;
          text-align: center;
          display: block;
          font-size: 16px;
        }
        .router-link-active {
          color: #19a3fe;
        }
      }
    }
  }
}
</style>
