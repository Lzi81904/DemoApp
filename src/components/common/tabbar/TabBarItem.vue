<template>
  <div class="tab-bar-item"  @click="itemclick">
  <div v-if="!isactive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>

  </div>

</template>

<script>
    export default{

      props:{
        path:String,
        activeColor:{
          type:String,
          default:'#0fbce3'
        }
      },
      data(){
        return{
             //isactive:true
        }
      },
      computed:{
        isactive(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isactive ? {color:this.activeColor}:{}
          }
      },
      methods:{
        itemclick(){
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }
  .tab-bar-item img{
    width: 26px;
    height: 26;
    margin-top: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
</style>
