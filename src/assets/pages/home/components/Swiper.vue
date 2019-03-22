<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: "HomeSwiper",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop:true
        },
        swiperList: [
          {
            id: '0001',
            imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d0d922f9371341aa43ca796fe9f69c5c.jpg_890x330_7e28cf14.jpg'
          },
          {
            id: '0002',
            imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/bf73eeef6141339080dabcb9d1f5f25e.jpg_890x330_fa852100.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background #eee
    .swiper-img
      width 100%
</style>
