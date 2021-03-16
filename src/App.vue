<template>
  <div>
    <Header/>
    <PizzaForm/>
    <PizzaList/>
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
  }
}
</script>

<style>
.form-row{
  padding-bottom: 2.5rem;
  width: 75%;
  margin: 0 auto;
}
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
</style>
