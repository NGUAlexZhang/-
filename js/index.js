let app=new Vue({
    el:'#app',
    data:{
        tmp:"",
        items:['eat','drink','code']
    },
    methods:{
        remove:function (index){
            this.items.splice(index,1)
        },
        add:function (){
            if(this.tmp===""){
                alert('please input')
            }
            else{
                this.items.push(this.tmp)
                this.tmp=""
            }
        },
        clear:function (){
            this.items=[]
        }
    }
})