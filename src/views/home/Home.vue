<template>
 <div>
   <nav-bar class="home-nav">
     <div slot="center">购物街</div>
   </nav-bar>
   <home-swiper :banners="banners"></home-swiper>
   <HomeRecommendView :recommends="recommended"/>

 </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home";
import HomeSwiper from "@/views/home/ChildrenComp/HomeSwiper";
import HomeRecommendView from "@/views/home/ChildrenComp/HomeRecommendView";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
    data(){
      return{
          banners: [],
          products: [],
          goods:{
            pop:{page:0, list:[]},
            new:{page:0, list:[]},
            sell:{page:0, list:[]}
          },
          currentType:'pop',
          isShowBackTop: false,
        recommended:[]
      }
    }
  ,
  created() {
    // 请求多个数据
    getHomeMultiData().then(res=>{
        this.banners = res.data.banner.list
        this.recommended = res.data.recommend.list
        console.log(res)
    })
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
