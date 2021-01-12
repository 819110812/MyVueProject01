<template>
 <div id="home">
   <nav-bar class="home-nav">
     <div slot="center">购物街</div>
   </nav-bar>
   <scroller class="home-scroller" ref="scroller" :probe-type="3" @scroll="getPostion">
   <home-swiper :banners="banners"></home-swiper>
   <HomeRecommendView :recommends="recommended"/>
   <HomeFeatureView/>
   <tab-control class="home-tab-control" :title="['流行', '新款', '精选']"  @tabClick="pTabClick"/>
   <goods-list :goods="showGoods" />
   </scroller>
   <back-top @click.native="backTopClick" v-show="isShowBackTop" />

 </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData,getGoodsData} from "@/network/home";
import HomeSwiper from "@/views/home/ChildrenComp/HomeSwiper";
import HomeRecommendView from "@/views/home/ChildrenComp/HomeRecommendView";
import HomeFeatureView from "@/views/home/ChildrenComp/HomeFeatureView";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroller from "@/components/common/scroller/Scroller";
import BackTop from "@/components/content/backTop/BackTop";



export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroller,
    BackTop
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
    this.getHomeData();
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods:{
    pTabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    getHomeData() {
      getHomeMultiData().then(res=>{
        this.banners = res.data.banner.list
        this.recommended = res.data.recommend.list

      })
    },
    getHomeGoodsData(type) {
      let page = this.goods[type].page + 1
      getGoodsData(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page +=1
      })
    },
    backTopClick() {
      // 通过$refs拿到组件中的对象
      this.$refs.scroller.scrollTo(0, 0, 500)
    },
    getPostion(postion) {
      this.isShowBackTop = -postion.y > 300
    }
  }
}
</script>

<style scoped>
    #home{
      padding-top: 44px;
      /*height: 100vh;*/
      /*position: relative;*/
    }
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

    .home-tab-control{
      /*两个要混合使用*/
      position: sticky;
      top: 44px;/*顶部navbar的高度*/
      z-index: 9;
      background-color: #fff;
    }
</style>
