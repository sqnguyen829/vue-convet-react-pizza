<template>
    <div class="form-row">
        <div class="col-5">
            <input type="text" class="form-control" placeholder="Pizza Topping" v-model='currentPizza.topping'/>
        </div>
        <div class="col">
          <select v-model='currentPizza.size' class="form-control">
            <option disabled value="">Please select one</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div class="col">
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="currentPizza.vegetarian" v-bind:value="true" />
            <label class="form-check-label">
              Vegetarian
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="currentPizza.vegetarian" v-bind:value="false" />
            <label class="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div class="col">
          <button type="submit" class="btn btn-success" @click="handleEdit(currentPizza)">Submit</button>
        </div>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name:"PizzaForm",
    computed: {
      ...mapState([
        'currentPizza'
      ])
    },
    methods:{
      ...mapActions([
        'handleEdit'
      ])
    }
}
</script>