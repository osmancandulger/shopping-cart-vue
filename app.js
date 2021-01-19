window.addEventListener('load',()=>{


     new Vue({
        el:"#app1",
        name:"Chart",
        data:{
            loading:true,
            chart:[],
            saved:[]

        },
        methods:{
            remove(index){
                this.chart.splice(index,1);
            },
            remove1(index){
                this.saved.splice(index,1);
            },
            move(index){
               const item= this.chart.splice(index,1);
               this.saved.push(item[0]);
            },
            move1(index){
                const item= this.saved.splice(index,1);
                this.chart.push(item[0]);
             }

        },
        created(){
            setTimeout(()=>{
            fetch('./data.json')
           .then((res)=>{return res.json()})
           .then((res)=> {
               this.loading=false;
               this.chart=res.chart;
               this.saved=res.saved;
           })

            },500)



           

        }
    
    })

});