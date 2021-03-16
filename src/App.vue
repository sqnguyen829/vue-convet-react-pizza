<template>
  <div>
    <Header/>
    <PizzaForm v-bind:pizza="currentPizza" v-on:update-pizza="updatePizza"/>
    <PizzaList v-bind:pizzas="pizzas" v-on:edit-pizza="editPizza"/>
  </div>
</template>

<script>
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

export default {
  name: 'App',
  components: {
    Header,
    PizzaForm,
    PizzaList
  },
  data() {
    return {
      pizzas:[],
      currentPizza:{
        topping:null,
        size:null,
        vegetarian:null,
        id:null
      }
    }
  },
  created() {
    fetch('http://localhost:3000/pizzas', {
      method:'GET'
    })
    .then(res => res.json())
    .then(data => this.pizzas = data)
    .catch(err => console.log(err))
  },
  methods:{
    editPizza(pizza) {
      this.currentPizza = {...pizza}
    },
    updatePizza() {
      if(this.currentPizza.id){
        fetch(`http://localhost:3000/pizzas/${this.currentPizza.id}`,{
          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(this.currentPizza)
        })
        .then(res => res.json())
        .then(data => {
          this.pizzas = this.pizzas.map(p => {
            if(p.id === this.currentPizza.id){
              return data
            }else{
              return p
            }
          })
        })
      }
    }
  }
}
</script>

<style>
.form-row{
  padding-bottom: 2.5rem;
  width: 75%;
  margin: 0 auto;
}
</style>
