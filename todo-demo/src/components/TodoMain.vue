<template>
<div >
      <div class="sa" :key="item.id" v-for="item in $store.getters.qh">
        <input class="toggle" :checked='item.done' type="checkbox" @change="sd1(item.id)"/>
        <label>{{item.info}}</label>
        <!-- 4.0 注册点击事件 -->
        <button class="destroy" @click="del(item.id)">删除</button>
      </div>
</div>
 
</template>

<script>
// 4. 目标: 删除list里数据
export default {
 data(){
   return{
     
   }
 },
 methods:{
  sd1(id){
    this.$store.state.list[id].done==true?this.$store.state.list[id].done=false:this.$store.state.list[id].done=true
    console.log(this.$store.state.list);
  },
  del(id){
    
    this.$store.commit('de')
    console.log(this.$store.state.list);
    this.$store.state.list.splice(id,1)
  }
 },
 created(){
 console.log(this.$store.getters.qh);
 },
 computed(){
  //  ...MapGetters(['qh'])
 }
}
</script>
<style scoped>
.sa{
  height: 40px;
}
.sa input{
  height: 15px;
  margin-left: 10px;
}
.sa label{
  font-size: 25px;
  margin-left: 20px;
}
.sa button{
  position: absolute;
  right: 10px;
  font-size: 15px;
  line-height: 40px;
}
</style>