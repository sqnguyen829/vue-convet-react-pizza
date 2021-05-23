export default {
    setPizzas: (state, pizzas) => {
        state.pizzas = pizzas
    },
    setEditPizza: (state, pizza) => {
        state.currentPizza = {...pizza}
    },
    updatePizza: (state, pizza) => {
        state.pizzas = state.pizzas.map(p => p.id === pizza.id? pizza:p)
        state.currentPizza = {
            id:null,
            topping:'',
            size:'',
            vegetarian:null
        }
    }
}