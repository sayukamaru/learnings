new Vue({
    el: "#app",
    data(){
        return{
            number: 9,
            name: 'yuka'
        }
    },
    methods: {
        countUp(){
            this.number++;
        },
        countDown(){
            this.number--;
        }
    },
    computed: {
        isPass: function(){
            return this.number >=10;
        }
    }
})