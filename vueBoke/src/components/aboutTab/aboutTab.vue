<template>
    <div class="aboutTab">
        <el-tabs v-model="activeName">
            <el-tab-pane label="基本信息" name="first">
                <el-row :gutter="20" class="basicInfo">
                    <el-col :span="12">
                        <div class="info">
                            <p>网名：Sxians | 沈宪帅</p>
                            <p>性别：男</p>
                            <p>网名：Sxians | 沈宪帅</p>
                            <p>网名：Sxians | 沈宪帅</p>
                            <p>网名：Sxians | 沈宪帅</p>
                            <p>网名：Sxians | 沈宪帅</p>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="info">
                            <p>家乡：山东枣庄</p>
                            <p>所在地：济南</p>
                            <p>网名：Sxians | 沈宪帅</p>
                            <p>网名：Sxians | 沈宪帅</p>
                            <p>网名：Sxians | 沈宪帅</p>
                            <p>网名：Sxians | 沈宪帅</p>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="工作技能" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped lang="less">
.aboutTab {
  margin-top: 40px;
}
.basicInfo{
    margin-top: 30px;
    p{
        line-height:1.5;
        margin-bottom: 10px;
    }
}
</style>
