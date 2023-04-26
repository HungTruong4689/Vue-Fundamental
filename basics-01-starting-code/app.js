const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'Finish the course and learn VUE!',
            courseGoalB: 'Master the course and learn VUE!',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');