<template>
    <div class="contact">
        <h2 class="hometitle">加我微信</h2>
        <img src="static/Contact.png" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.contact {
  margin-bottom: 20px;
  padding: 20px 15px;
  height: 354px;
  width: 300px;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 2px 5px 0 hsla(0, 0%, 57%, 0.1);
  .hometitle {
    position: relative;
    margin: 0;
    margin-bottom: 15px;
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
  img{
      width: 100%;
  }
}
.contact:hover :after {
  width: 70px;
}
</style>
