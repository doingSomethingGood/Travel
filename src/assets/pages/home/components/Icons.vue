<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
            <!--<img class="icon-img-content" src="../../../jing_dian_6.png" alt="">-->
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "icons",
    data() {
      return {
        iconList: [
          {
            id: '0001',
            imgUrl: '../../../jing_dian.png',
            desc: '景点门票'
          },
          {
            id: '0002',
            imgUrl: '../../../jing_dian_1.png',
            desc: '动物园'
          },
          {
            id: '0003',
            imgUrl: '../../../jing_dian_2.png',
            desc: '植物园'
          },
          {
            id: '0004',
            imgUrl: '../../../jing_dian_3.png',
            desc: '啊哈哈乐园'
          },
          {
            id: '0005',
            imgUrl: '../../../jing_dian_4.png',
            desc: '景点门票'
          },
          {
            id: '0007',
            imgUrl: '../../../jing_dian_6.png',
            desc: '景点门票'
          },
          {
            id: '0008',
            imgUrl: '../../../jing_dian_7.png',
            desc: '景点门票'
          },
          {
            id: '0009',
            imgUrl: '../../../jing_dian_8.png',
            desc: '景点门票'
          },

        ]
      }
    },
    computed: {
      pages() {
        const pages = [];
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        left 0
        right 0
        top 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()
</style>
