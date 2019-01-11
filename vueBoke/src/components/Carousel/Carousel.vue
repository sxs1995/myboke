<template>
  <div>
    <div class="Carousel">
      <el-carousel height="408px">
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
          <img :src="item.img" width="100%" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <blogsList></blogsList>
  </div>
</template>

<script>
import blogsList from '@/components/blogsList/blogsList'
export default {
  name: 'Carousel',
  components: {
    blogsList
  },
  data () {
    return {
      imgs: [{
        'img': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=217345168,3943418635&fm=27&gp=0.jpg'
      }, {
        'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530593574692&di=4855ef35c751ae72c594df82b8ed70f0&imgtype=0&src=http%3A%2F%2Fpic.xiudodo.com%2Ffigure%2F00%2F00%2F36%2F49%2F67%2F7655be99903b1df.jpg'
      }]
    }
  }
}
</script>

<style scoped>
.Carousel{
  margin-bottom: 20px;
}
</style>
