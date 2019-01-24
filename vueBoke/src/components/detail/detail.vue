<template>
  <div class="detail">
    <div class="box">
      <h1 class="title">{{blog.title}}</h1>
      <div class="intro">
        <span>{{blog.time}}</span>
        <span>{{blog.category.name}}</span>
        <span>
          阅读数：
          <b>{{blog.pgview}}</b>
        </span>
      </div>
      <div class="content" v-html="blog.blogs"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL, moment } from 'api/index';
export default {
	data() {
		return {
			blog: '',
		};
	},
	mounted() {
		let id = this.$route.params.id;
		console.log();
		axios
			.post(BASE_URL + '/blogs/getDetail', { id: id })
			.then(res => {
				console.log(res.data);
				if (res.data.code === '00000') {
					this.blog = res.data.rows;
					this.blog.time = moment(res.data.rows.createAt);
				}
			})
			.catch(err => {
				console.log(err);
			});
	},
	methods: {},
};
</script>

<style scoped lang="less">
.box {
	min-height: 800px;
	height: auto;
	width: 100%;
	background: #fff;
	border-radius: 10px;
	.title {
		text-align: center;
    height: 60px;
    margin-top: 0;
		line-height: 80px;
		font-size: 1.5em;
	}
	.intro {
		width: 100%;
		text-align: center;
		border-bottom: 1px solid #f2f2f2;
		padding-bottom: 20px;
		span {
			margin-left: 50px;
		}
	}
	.content {
		padding: 20px 50px;
	}
}
</style>