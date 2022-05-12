<template>
  <div class="todoapp">
    <TodoHeader ></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter ></TodoFooter>
  </div>
</template>

<script>
// 1. 目标: 创建工程-准备相关组件文件-标签+样式 (静态)
// 1.0 样式引入
import "./styles/base.css"
import "./styles/index.css"
// 1.1 组件引入
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
export default {
  // 1.2 组件注册
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  // 2. 目标: 铺设待办任务
  // 2.0 - 准备数据
  data(){
    return {
    
    }
  },
  methods: {
    
  },
  // 6.5 定义showArr数组 - 通过list配合条件筛选而来
  computed: {
    
  },
  // 8. 目标: 数据缓存
  watch: {
    
  },
  created(){
    this.$store.dispatch('sa')
  }
}
</script>

<style>
.todoapp{
  width: 100%;
  margin-left: 100%;
}
</style>