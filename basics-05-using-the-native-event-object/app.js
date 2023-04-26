const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName(){
      console.log("Changed!!!")
      if(this.name === ''){
        return '';
      }
      return this.name + ' '+ 'Mobile';
    }
  },

  methods: {
    outputFullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' '+ 'Mobile';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = ''
    }
  }
});

app.mount('#events');
