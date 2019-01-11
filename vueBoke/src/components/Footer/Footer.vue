
<template>
    <div class="footer">
        <p>Design by
            <span>
                <router-link to="/home">沈宪帅个人博客</router-link>
            </span>
            <span>
                <router-link to="/home">备案号</router-link>
            </span>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.footer {
  width: 100%;
  color: #a5a4a4;
  text-align: center;
  padding: 20px 0;
  clear: both;
  text-shadow: #fff 1px 0 2px, #fff 0 1px 2px, #fff -1px 0 2px, #fff 0 -1px 2px;
  span a{
    color: #a5a4a4;
  }
  span:hover a{
    color: #000;
  }
}
</style>
