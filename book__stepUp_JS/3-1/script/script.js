new Vue({
    el: "#app",
    data(){
        return{
            text: 'hello Vue.js!'
        }
    },
    methods: {
        change(){
            this.text = 'clicked!';
        }
    }
})