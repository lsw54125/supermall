<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
      <Home-swiper :banners="banners"></Home-swiper>
      <home-recommerd-view :recommends="recommends"></home-recommerd-view>
      <feature-view></feature-view>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommerdView from "@/views/home/childComps/HomeRecommerdView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import {getHomeMultidata,getHomeGoods} from "@/network/home";


export default {
  name: "Home",
  components:{
    HomeSwiper,
    HomeRecommerdView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      result: null,
      banners:[],
      recommends: [],
      goods:{
        'pop':{
          page:0,
          list:[]
        },
        'new':{
          page:0,
          list:[]
        },
        'sell':{
          page:0,
          list:[]
        },
      },
      currentTyoe: 'pop',
      isShowBackTop: false,

    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentTyoe].list
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    //事件监听
    tabClick(index) {
      switch (index){
        case 0:
          this.currentTyoe = 'pop'
          break
        case 1:
          this.currentTyoe = 'new'
          break
        case 2:
          this.currentTyoe = 'sell'
          break
        default:
          this.currentTyoe = 'pop'
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      this.isShowBackTop =  Math.abs(position.y)  > 1000
    },
    loadMore(){
      console.log("qqweqwe");
      this.getHomeGoods(this.currentTyoe)
    },
    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res =>{
        this.result =res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page +1
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.finishPullUp()

      })
    }

  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
}

  .home-nav{
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
  .content{
    height: calc(100% - 49px);
    overflow: hidden;
  }
</style>
