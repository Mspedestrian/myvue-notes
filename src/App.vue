<template>
    <div>
        <router-view></router-view>
        <mt-tabbar v-model="selected" value="首页" :fixed= "true">
          <mt-tab-item id="首页">
            <!-- <img slot="icon" src="../assets/100x100.png"> -->
            首页
          </mt-tab-item>
          <mt-tab-item id="写日记">
            <!-- <img slot="icon" src="../assets/100x100.png"> -->
            写日记
          </mt-tab-item>
          <mt-tab-item id="消息">
            <!-- <img slot="icon" src="../assets/100x100.png"> -->
            消息
          </mt-tab-item>
          <mt-tab-item id="我的">
            <!-- <img slot="icon" src="../assets/100x100.png"> -->
            我的
          </mt-tab-item>
        </mt-tabbar>
    </div>
    
</template>

<script>
export default {
    name: 'app',
    data(){
        return {
            selected:"首页"
        }
    }
    
}
</script>

<style scoped lang="less">
    img,h3,body,html,p{
        padding:0;
        margin:0;
    }
    
    
</style>
