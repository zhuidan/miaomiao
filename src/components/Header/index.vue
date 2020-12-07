<template>
    <header>
        <div>{{title}}</div>
    </header>
</template>

<script>
export default {
    name:'Header',
    props:{
        title :{
            type:String,
            default:"喵喵影院"
        }
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
header{
    background: pink;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
</style>
