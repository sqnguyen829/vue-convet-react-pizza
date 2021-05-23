<template>
    <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <Pizza 
            v-for="pizza in pizzas"
            v-bind:pizza ="pizza"
            v-bind:key="pizza.id"/>
        </tbody>
      </table>
</template>

<script>
import { mapState } from 'vuex'
import Pizza from '../components/Pizza'

export default {
    name:"PizzaList",
    components:{
      Pizza
    },
    computed: {
      ...mapState([
        'pizzas'
      ])
    }
}
</script>