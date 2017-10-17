<template >
    <div>
        <br/>
        <div>数据状态管理：{{num}}</div>
        <br/>
        <button @click="add1">+1</button>
        <button @click="add2">+2</button>
        <button @click="reduce2">-2</button>
        <button @click="reduce1">-1</button>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'add-test',
        computed: mapState([
            'num'
        ]),
        methods: {
            ...mapActions([
                'add','reduce','setDefault'
            ]),
            //添加按钮处理事件
            add1(){
                this.add(1);
            },
            add2(){
                this.add(2);
            },
            reduce1(){
                this.reduce(1);
            },
            reduce2(){
                this.reduce(2);
            }
        },
        created(){
            console.log('init');
        },
        beforeUpdate(){
            // 利用生命周期来添加控制逻辑
            if (this.num < 0){                
              //  this.setDefault(0); 
              return;
            }
        }
    }
</script>

<style>
    body {
        color: blueviolet;
    }
</style>