<template>
  <div class="tag">
    <h2 class="hometitle">标签</h2>
    <ul>
      <a href="">css3</a>
      <a href="">javascript</a>
      <a href="">nodeJs</a>
      <a href="">vue</a>
      <a href="">webpack</a>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.tag {
  margin-bottom: 20px;
  padding: 20px 15px;
  height: 194px;
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
    font-size: 14px;
    a {
      float: left;
      display: block;
      margin: 10px 10px 0 0;
      padding: 3px 11px;
      border-radius: 8px;
      background: #999;
      color: #fff;
      line-height: 24px;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      transition: all 0.5s;
    }
    a:first-child {
      background: #036564;
    }
    a:nth-child(5n-4) {
      background: #8a9b0f;
    }
    a:nth-child(5n-3) {
      background: #eb6841;
    }
    a:nth-child(5n-2) {
      background: #3fb8af;
    }
    a:nth-child(5n-1) {
      background: #fe4365;
    }
    a:nth-child(5n) {
      background: #fc9d9a;
    }
  }
}
.tag:hover :after {
  width: 70px;
}
</style>
