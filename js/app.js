var taskApp = new Vue({
    el: '#taskApp',
    data:{
        tasks:[
            {name:'think about architecture',done:false},
            {name:'construct a code',done:false},
            {name:'gain money',done:false}
        ],
        nameInput:''
    },
    methods:{
        addTask: function(){
            this.tasks.push({
                name: this.nameInput,
                done:false
            })
        },
        deleteTask: function(task){
            this.tasks.splice(this.tasks.indexOf(task),1);
        }
    }
});