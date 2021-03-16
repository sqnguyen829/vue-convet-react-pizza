<template>
    <div class="form-row">
        <div class="col-5">
            <input type="text" class="form-control" placeholder="Pizza Topping" value="Pizza topping"/>
        </div>
        <div class="col">
          <select value="null" class="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div class="col">
          <div class="form-check">
            <input class="form-check-input" type="radio" value="Vegetarian" />
            <label class="form-check-label">
              Vegetarian
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="Not Vegetarian"/>
            <label class="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div class="col">
          <button type="submit" class="btn btn-success">Submit</button>
        </div>
      </div>
</template>

<script>
export default {
    name:"PizzaForm"
}
</script>