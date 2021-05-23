export default {
    handleFetchPizzas: ({commit}) => {
        fetch('http://localhost:3000/pizzas', {
            method:"GET"
        })
        .then(res => res.json())
        .then(data => {
            commit('setPizzas', data)
        })
    },
    handleEditPizza: ({commit}, pizza) => {
        commit('setEditPizza', pizza)
    },
    handleEdit: ({commit}, pizza) => {
        fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
            method:"PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(pizza)
        })
        .then(res=> res.json())
        .then(data => {
            commit('updatePizza', data)
        })
    }
}