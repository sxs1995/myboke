<template>
    <div class="blogroll">
        <h2 class="hometitle">友情链接</h2>
        <ul>
            <li>
                <a href="https://www.liaoxuefeng.com/" target="_blank">廖雪峰的官方网站</a>
            </li>
            <li>
                <a href="http://jspang.com/" target="_blank">技术胖博客</a>
            </li>
            <li>
                <a href="https://cn.vuejs.org/v2/guide/" target="_blank">Vue中文官网</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.blogroll {
  margin-bottom: 20px;
  padding: 20px 15px;
  height: auto;
  width: 300px;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 2px 5px 0 hsla(0, 0%, 57%, 0.1);
  .hometitle {
    position: relative;
    margin: 0;
    margin-bottom: 25px;
    padding-bottom: 15px;
    color: #282828;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
  }
  .hometitle:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #19a3fe;
    content: "";
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  ul {
    overflow: hidden;
    li {
      float: left;
      display: block;
      margin: 0 10px 10px 0;
      line-height: 24px;
      font-size: 15px;
      a {
        color: #555;
      }
    }
  }
}
.blogroll:hover :after {
  width: 70px;
}
</style>
