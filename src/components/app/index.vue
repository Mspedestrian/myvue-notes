<template>
    <div class="app">
        <!-- <img src="./assets/logo.png"> -->
        <h3>话题.逃避</h3>
        <div class="top">
            <img src="../../assets/top.jpg" style="width:100%;height:130px;">
            <p>白落梅写过一句话，“任何的珍惜，不是为了天长地久，而是希望离别的那一天，可以心安理得的挥手，道声珍重再见</p>
        </div>
        <h3>最新日记</h3>
        <mt-loadmore 
        :top-method="loadTop" 
        :bottom-method="loadBottom" 
        :bottom-all-loaded="allLoaded" 
        ref="loadmore"
        
        topDropText="正在加载"
        topPullText="正在加载"
        topLoadingText="正在加载"
        bottomPullText="正在加载"
        bottomDropText="正在加载"
        bottomLoadingText="正在加载"
        :bottomDistance="50"
        >
            <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
                <li v-for="item in list" class="item">
                    <div class="img"><img src="../../assets/top.jpg" height="40" width="40" alt=""></div>
                    
                    <div class="right">
                        <p class="title">{{item.name}}<span class="book">{{item.book}}</span><span class="time">{{item.time}}</span></p>
                        <p class="content">{{item.content}}</p>
                    </div>
                </li>
            </ul>
        </mt-loadmore>
    </div>
    
</template>

<script>
export default {
    name: 'first',
    data () {
        return {
            // loadMore:true,
            bottomDistance:2,
            allLoaded:false,
            msg: 'Welcome to Your Vue.js App',
            list:[{
                name:'遗落的灯花',
                book:'《途中》',
                time:'8:45',
                content:'1112222333'
            },{
                name:'遗落的灯花',
                book:'《途中》',
                time:'8:45',
                content:'1112222333'
            },{
                name:'遗落的灯花',
                book:'《途中》',
                time:'8:45',
                content:'1112222333'
            },{
                name:'遗落的灯花',
                book:'《途中》',
                time:'8:45',
                content:'1112222333'
            },{
                name:'遗落的灯花',
                book:'《途中》',
                time:'8:45',
                content:'1112222333'
            },{
                name:'遗落的灯花',
                book:'《途中》',
                time:'8:45',
                content:'1112222333'
            },]
        }
    },
    methods:{
        loadMore(){

        },
        loadTop(){
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
 
           // this.allLoaded = true;// 若数据已全部获取完毕
           // this.$refs.loadmore.onBottomLoaded();
        }

    },
    mounted(){

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    img,h3,body,html,p,ul,li{
        padding:0;
        margin:0;
    }
    ul{
        list-style-type: none;
    }
    .app{
        width:100%;
    }
    
    h3{
        padding-top:20px;
        padding-bottom: 20px;
        padding-left: 10px;
        margin:0;
    }
    .top{
        height:130px;
        position: relative;
        p{
            padding:5px 10px 5px 10px;
            background-color: #eee;
            font-size: 90%;
            opacity: 0.7;
            position: absolute;
            bottom: 0;
            // width:100%;
            color:#000;

        }
        
    }
    .item{

        border-bottom: 1px solid #eee;
        margin-left: 15px;
        margin-right: 15px;
        padding-top: 20px;
        padding-bottom: 30px;
        display: flex;
        display: -webkit-flex; /* Safari */

        .img{

            border-radius: 100%;
            overflow: hidden;
            width:30px;
            height:30px;
            flex:none;
        }
        .right{
            margin-left: 15px;
            flex:1;
            .book{
                color:#aaa;
                font-size: 80%;
            }
            .time{
                float: right;
                font-size: 80%;
                color:#aaa;
            }
            .content{
                margin-top: 10px;
            }
        }
    }
    
</style>
