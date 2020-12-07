<template>
    <div>
        <Header>
        </Header>
        <div class="content">
                <div class="movie-menu">
                    <div class="movie-item">
                        <router-link tag="span" to="/movie/city">太原</router-link>
                    </div>
                    <div class="movie-item">
                        <router-link tag="span" to="/movie/hotshowing">正在热映</router-link>
                    </div>
                    <div class="movie-item">
                        <router-link tag="span" to="/movie/upcoming">即将上线</router-link>
                    </div>
                    <div class="movie-item">
                        <router-link tag="span" to="/movie/search">搜索</router-link>
                    </div>
                </div>
                <keep-alive>
                    <router-view />
                </keep-alive>
            </div>

        <Tabbar></Tabbar>
    
    </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
export default {
    name:'movie',
    components:{
        Header,
        Tabbar
    },
    data() {
        return {

        };
    },
    methods: {

    },
    mounted(){
        // this.axios.get('/api/citylist').then(res=>{
        //     console.log(res)
        //     if(res.data.msg === "ok"){
        //         var data = rea.data.data.cities
        //     }
        // })
    }
    
};
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
}
.movie-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}
.movie-item{
    flex: 1;
    text-align: center;
}
.router-link-active{
    color: red;
}
</style>
