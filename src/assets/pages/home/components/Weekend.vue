<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    data(){
      return{
        recommendList:[

          {
            id:'0001',
            imgUrl:'../../../jing_dian.png',
            title:'美国哈佛开发就不浪费快递费就好了',
            desc:'临床技能法律床律层面'
          },
          {
            id:'0002',
            imgUrl:'../../../jing_dian.png',
            title:'美国哈佛开发就不浪费快递费就好了',
            desc:'临床技能法律床律层面'
          },
          {
            id:'0003',
            imgUrl:'../../../jing_dian.png',
            title:'美国哈佛开发就不浪费快递费就好了',
            desc:'临床技能法律床律层面'
          },
          {
            id:'0004',
            imgUrl:'../../../jing_dian.png',
            title:'美国哈佛开发就不浪费快递费就好了',
            desc:'临床技能法律床律层面'
          },
          {
            id:'0005',
            imgUrl:'../../../jing_dian.png',
            title:'美国哈佛开发就不浪费快递费就好了',
            desc:'临床技能法律床律层面'
          },
          {
            id:'0006',
            imgUrl:'../../../jing_dian.png',
            title:'美国哈佛开发就不浪费快递费就好了',
            desc:'临床技能法律床律层面'
          },
          {
            id:'0007',
            imgUrl:'../../../jing_dian.png',
            title:'美国哈佛开发就不浪费快递费就好了',
            desc:'临床技能法律床律层面'
          },
          {
            id:'0008',
            imgUrl:'../../../jing_dian.png',
            title:'美国哈佛开发就不浪费快递费就好了',
            desc:'临床技能法律床律层面'
          },
          {
            id:'0009',
            imgUrl:'../../../jing_dian.png',
            title:'美国哈佛开发就不浪费快递费就好了',
            desc:'临床技能法律床律层面'
          }


        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

  @import "~styles/mixins.styl"

  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    padding-bottom 33.9%
    height 0
  .item-img
    width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
