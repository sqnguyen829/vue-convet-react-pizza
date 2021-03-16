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
          {{'render Pizza here'}}
        </tbody>
      </table>
</template>

<script>
export default {
    name:"PizzaList"
}
</script>