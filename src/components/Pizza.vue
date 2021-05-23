<template>
    <tr>
      <td>{{pizza.topping}}</td>
      <td>{{pizza.size}}</td>
      <td>{{pizza.vegetarian? "Yes": "No"}}</td>
      <td>
        <button @click="$emit('edit-pizza', pizza)" type="button" class="btn btn-primary">Edit Pizza</button></td>
    </tr>
</template>

<script>
export default {
    name:"Pizza",
    props: ["pizza"]
}
</script>