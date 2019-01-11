<template>
    <div class="timeLine">
        <Timeline pending>
            <TimelineItem v-for="(item, index) in timeLines" :key="index">
                <p class="time">{{item.time}}</p>
                <p class="content">{{item.intro}}</p>
            </TimelineItem>
        </Timeline>
    </div>

</template>
<script>
export default {
  name: 'timeLine',
  data () {
    return {
      timeLines: [
        {
          time: '1976年',
          intro: 'Apple I 问世'
        },
        {
          time: '1978年',
          intro: 'Apple I 问世'
        },
        {
          time: '1979年',
          intro: 'Apple I 问世'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.time {
  font-size: 15px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
.timeLine{
    width: 100%;
    height: auto;
    padding: 50px;
    background: #fff;
    p{
        line-height: 1.5;
        font-size: 15px;
    }
}
</style>
