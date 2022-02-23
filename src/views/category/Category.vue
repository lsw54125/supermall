<template>
  <div class="wrapper" @click="btnClick">
    <ul class="content" >
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>122</li>
      <li>333</li>
      <li>444</li>
      <li>555</li>
      <li>666</li>
      <li>777</li>
      <li>888</li>
      <li>999</li>
    </ul>
  </div>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
  name: "Category",
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BSscroll('.wrapper',{
      probeType: 2,
      pullUpLoad: true,
      click: true
    })
    this.scroll.on('scroll',(posstion) =>{
      console.log(posstion);
    })
    this.scroll.on('pullingUp',()=>{
      console.log('111');
    })
  },
  methods: {
    btnClick() {
      console.log('aaa');
    }
  },
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: #e3e3e3;
  overflow: hidden;
}
.content{

}
</style>
