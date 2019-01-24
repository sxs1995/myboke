<template>
	<div class="tag">
		<h2 class="hometitle">标签</h2>
		<ul>
				<a href="" v-for="item in category" v-bind:key="item._id">{{item.name}}</a>
		</ul>
	</div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from 'api/index';
export default {
	data() {
		return {   
			category: [],
		};
	},
	mounted() {
		/**
		 * 查询分类列表
		 */
		axios
			.post(BASE_URL + '/category/list', { pagesize: 20, page: 1 })
			.then(res => {
				if (res.data.code === '00000') {
					console.log(res.data.rows);
					this.category = res.data.rows;
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
.tag {
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
		content: '';
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
