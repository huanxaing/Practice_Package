<template>
  <header class="header">
    <!-- 9. 目标: 全选状态
      9.0 v-model关联全选状态
      页面变化(勾选true, 未勾选false) -> v-model -> isAll变量
     -->
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <!-- 3.0 键盘事件-回车按键
         3.1 输入框 - v-model获取值
     -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="val"
      @keydown.enter="downFn"
     
    />
  </header>
</template>

<script>
// 3. 目标 - 新增任务
export default {
  data() {
    return {
      val:''
    };
  },
  methods: {
    downFn(){
      var id = this.$store.state.list.length-1
      id+=1
      console.log(id);
      var sd = {
        id:id,
        info:this.val,
        done:false
      }
      this.$store.commit('sdd',sd)
      this.val=''
      console.log(this.$store.state.list);
    }
  },
  created(){
    
  },
  // 9.1 定义计算属性
  computed: {
    
  },
 
};
</script>