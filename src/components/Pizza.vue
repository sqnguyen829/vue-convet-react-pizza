<template>
    <tr>
      <td>{{pizza.topping}}</td>
      <td>{{pizza.size}}</td>
      <td>{{pizza.vegetarian? "Yes":"No"}}</td>
      <td><button @click = handleEditPizza(pizza) type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"Pizza",
    props: [
      'pizza'
    ],
    methods:{
      ...mapActions([
        'handleEditPizza'
      ])
    }
}
</script>