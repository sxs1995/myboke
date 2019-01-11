<template>
  <div class="blogsList">
    <ul>
      <li class="blogs">
        <h3 class="blogtitle">
          <a href="" target="_blank">个人博客模板《show time》后台管理</a>
        </h3>
        <span class="blogpic">
          <a href="" title="">
            <img src="http://www.yangqq.com/d/file/jstt/web/2018-06-30/5b9a6da35e0224bcb901358f515ece47.png" alt="">
          </a>
        </span>
        <p class="blogtext">
          首先感谢您购买本次服务，网站已经安装，并且代码调试完毕，这份操作文档，会帮助你更快的熟悉后台，认真看文档，会取得事半功倍的效果。当然，以下文档里，有任何不便修改...
        </p>
        <div class="bloginfo">
          <ul>
            <li class="lmname">
              <a href="" target="">网站建设</a>
            </li>
            <li class="timer">2018-06-30</li>
            <li class="view">
              <span>289</span>
              已阅读
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.blogsList {
  // margin-top: 20px;
  ul {
    .blogs {
      width: 832px;
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
      .blogpic:hover img{
        transform: scale(1.2)
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
          background: url("http://www.yangqq.com/skin/show/images/auicon.jpg")
            no-repeat top -23px left;
        }
        .timer {
          background: url(http://www.yangqq.com/skin/show/images/auicon.jpg)
            no-repeat top -44px left;
        }
        .view {
          background: url(http://www.yangqq.com/skin/show/images/auicon.jpg)
            no-repeat top -64px left;
        }
      }
    }
    .blogs:before {
      position: absolute;
      content: "";
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
