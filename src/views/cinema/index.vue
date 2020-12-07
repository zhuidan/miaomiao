<template>
    <div>
    <Header title="喵喵电影院"></Header>
    <div>电影院</div>
    <Tabbar></Tabbar>
</div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
export default {
    name:'cinema',
    components:{
        Header,
        Tabbar
    },
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>

</style>
