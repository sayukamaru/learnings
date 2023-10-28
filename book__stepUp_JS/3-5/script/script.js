new Vue ({
    el: "#app",
    data(){
        return {
            name: 'default'
        }
    },
    computed: {
        isInvalidName(){
            return this.name.length < 4;
        }
    }
})