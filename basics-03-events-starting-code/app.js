const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmName = this.name;
    },
    submitForm(event){
      // event.preventDefault();
      alert('Submitted!');
    },
    setName(event,lastName){
      
      this.name = event.target.value + ' '+ lastName;
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
