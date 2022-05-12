<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{$store.state.list.length}}</strong></span>
    <ul class="filters" >
      <li>
        <!-- 6.1 判断谁应该有高亮样式: 动态class
            6.2 用户点击要切换isSel里保存的值
         -->
        <a @click="sa('qb')"  href="javascript:;" >全部</a>
      </li>
      <li>
        <a @click="sa('yj')" href="javascript:;" >未完成</a>
      </li>
      <li>
        <a @click="sa('my')" href="javascript:;" >已完成</a>
      </li>
    </ul>
    <!-- 7. 目标: 清除已完成 -->
    <!-- 7.0 点击事件 -->
    <button class="clear-completed" @click="del">清除已完成</button>
  </footer>
</template>

<script>
// 5. 目标: 数量统计
export default {
 
  computed: {
    
  },
  // 6. 目标: 点谁谁亮
  // 6.0 变量isSel
  data(){
    return {
      
    }
  },
  methods: {
    del(){
      this.$store.commit('dell')
    },
    sa(num){
       this.$store.state.num = num
       this.$store.dispatch('sa')
      //  console.log(this.$store.state.num);
    }
  }
}
</script>
<style scoped>
.footer{
  height: 40px;
}
</style>