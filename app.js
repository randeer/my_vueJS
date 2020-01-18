new Vue({
    el: '#app',
    data: {
        title: 'Dilshani Lakshika Dias',
        wage: 1,
        name: 'please enter your name:'
        
    },
    methods: {
        clickbutton(){
            return 'I am currently working on Dialog';
        },
        UpdateValue(e){
            this.name = e.target.value;
        }
    }
})