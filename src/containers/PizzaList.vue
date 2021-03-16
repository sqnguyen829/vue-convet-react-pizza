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
        <tbody v-bind:key="pizza.id" v-for="pizza in pizzas">
          <Pizza v-bind:pizza="pizza" v-on:edit-pizza="$emit('edit-pizza', pizza)"/>
        </tbody>
      </table>
</template>

<script>
import Pizza from '../components/Pizza'

export default {
    name:"PizzaList",
    props:["pizzas"],
    components:{
        Pizza
    }
}
</script>