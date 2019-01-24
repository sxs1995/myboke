<template>
	<div class="blogsList">
		<ul>
			<li class="blogs" v-for="item in blogsList" :key="item._id" @click="toDetail(item._id)">
				<!-- <router-link to="/detail/" > -->
				<h3 class="blogtitle">
					<a href="" target="_blank">{{item.title}}</a>
				</h3>
				<span class="blogpic" v-if="item.imgs">
					<a href="">
						<img
							src="http://www.yangqq.com/d/file/jstt/web/2018-06-30/5b9a6da35e0224bcb901358f515ece47.png"
							alt="item.title"
						>
					</a>
				</span>
				<!-- v-html="item.blogs" -->
				<p class="blogtext">{{item.blog}}</p>
				<div class="bloginfo">
					<ul>
						<li class="lmname">
							<a href="" target="">{{item.category.name}}</a>
						</li>
						<li class="timer">{{item.time}}</li>
						<li class="view">
							<span>{{item.pgview}}</span>
							已阅读
						</li>
					</ul>
				</div>
				<!-- </router-link> -->
			</li>
		</ul>
		<el-pagination
			background=""
			layout="prev, pager, next"
			@current-change="currentChange"
			:current-page.sync="currentPage"
			:page-size="pageSize"
			:total="limit"
		></el-pagination>
	</div>
</template>

<script>
import axios from 'axios';
import { BASE_URL, moment } from 'api/index';
export default {
	data() {
		return {
			blogsList: [],
			currentPage: 1,
			pageSize: 5,
			limit: 10,
		};
	},
	computed: {},
	mounted() {
		let category = this.$route.params.category;
		console.log(category);
		if (category) {
			// /getBlogsListByCy
			this.category = category;
			this.getBlogsListByCg({ category: category, page: 1 });
		} else {
			this.getBlogsList({ page: 1 });
		}
	},
	methods: {
		getBlogsList(params) {
			let _this = this;
			axios
				.post(BASE_URL + '/blogs/getBlogsList', { pagesize: 5, ...params })
				.then(res => {
					if (res.data.code === '00000') {
						let blogs = res.data.rows;
						for (let i = 0; i < blogs.length; i++) {
							blogs[i].blog = _this.getText(blogs[i].blogs);
							blogs[i].time = moment(blogs[i].createAt);
						}
						_this.blogsList = blogs;
						_this.limit = res.data.total;
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		getBlogsListByCg(params) {
			let _this = this;
			axios
				.post(BASE_URL + '/blogs/getBlogsListByCy', { pagesize: 5, ...params })
				.then(res => {
					if (res.data.code === '00000') {
						let blogs = res.data.rows;
						for (let i = 0; i < blogs.length; i++) {
							blogs[i].blog = _this.getText(blogs[i].blogs);
							blogs[i].time = moment(blogs[i].createAt);
						}
						_this.blogsList = blogs;
						_this.limit = res.data.total;
					}
				})
				.catch(err => {
					console.log(err);
				});
		},

		toDetail(id) {
			this.$router.push({ path: '/detail/' + id });
		},
		getText(html_str) {
			var re = new RegExp('<[^<>]+>', 'g');
			var text = html_str.replace(re, '');
			var text = html_str.replace(/<[^<>]+>/g, '');
			return text;
		},
		currentChange() {
			if (this.category) {
				this.getBlogsListByCg({ category: this.category, page: this.currentPage });
			} else {
				this.getBlogsList({ page: this.currentPage });
			}
		},
	},
};
</script>

<style scoped lang="less">
.blogsList {
	// margin-top: 20px;
	ul {
		.blogs {
			// width: 832px;
			height: auto;
			overflow: hidden;
			margin-bottom: 20px;
			padding: 20px;
			background: #fff;
			-webkit-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, 0.1);
			-moz-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, 0.1);
			box-shadow: 0 2px 5px 0 rgba(146, 146, 146, 0.1);
			-webkit-transition: all 0.6s ease;
			-moz-transition: all 0.6s ease;
			-o-transition: all 0.6s ease;
			transition: all 0.6s ease;
			position: relative;
			.blogtitle {
				margin: 5px 0 10px 0;
				font-size: 20px;
				overflow: hidden;
				cursor: pointer;
				a {
					color: #333;
					font-weight: bold;
				}
			}
			.blogpic {
				float: left;
				width: 30%;
				max-height: 170px;
				margin-right: 20px;
				display: block;
				overflow: hidden;
				img {
					width: 100%;
					height: auto;
					-webkit-transition: all 0.6s ease;
					-moz-transition: all 0.6s ease;
					-o-transition: all 0.6s ease;
					transition: all 0.6s ease;
				}
			}
			.blogpic:hover img {
				transform: scale(1.2);
			}
			.blogtext {
				font-size: 14px;
				color: #566573;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				margin-top: 20px;
				line-height: 1.5;
			}
			.bloginfo {
				overflow: hidden;
				margin-top: 30px;
				display: block;
				li {
					float: left;
					font-size: 12px;
					padding: 0 0 0 20px;
					margin: 0 15px 0 0;
					color: #748594;
					line-height: 1.5;
					display: inline-block;
				}
				.lmname {
					background: url('http://www.yangqq.com/skin/show/images/auicon.jpg') no-repeat top -23px left;
				}
				.timer {
					background: url(http://www.yangqq.com/skin/show/images/auicon.jpg) no-repeat top -44px left;
				}
				.view {
					background: url(http://www.yangqq.com/skin/show/images/auicon.jpg) no-repeat top -64px left;
				}
			}
		}
		.blogs:before {
			position: absolute;
			content: '';
			width: 3px;
			height: 20px;
			background: #f65a8a;
			left: 0;
			top: 26px;
		}
		.blogs:hover .blogtitle a {
			color: #f65a8a;
		}
	}
}
</style>
