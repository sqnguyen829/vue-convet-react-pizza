# Access Labs Pizza

This project was converted from react to vue for problem solving.


For getting the CSS for the col/row to work.

https://blog.logrocket.com/getting-started-with-bootstrapvue-2d8bf907ef11/

The process I went through to get the row/colunms to work was:

*npm install bootstrap-vue bootstrap axios

*added code to the <head> in the index.html file

*Added code to the main.js

*this then caused the basic row/column to work in the MainContainer.


*From the guide I didn't use the script tags since it was breaking the code.

<!-- Add Vue and BootstrapVue scripts just before the closing </body> tag -->

<script src="https://unpkg.com/vue/dist/vue.min.js"></script>


<script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>


![Pizza Screen Recording](https://curriculum-content.s3.amazonaws.com/react/pizza.gif)

Welcome to your first day at the Access Labs Pizzeria!
Today, you are tasked to building an online menu of all the pizzas that the pizzeria offers.

The database of orders can be found in a json-server, under `http://localhost:3000/pizzas`.
Make sure that before you fire up your React server, you *first* fire up your json-server.

```text

TO INSTALL: npm install -g json-server

TO START: json-server --watch db.json

TO START Vue server: npm run serve

```

After firing up your server, render the list of pizzas in to the table.

Each row in the table should be a pizza component and when you click the "Edit" button, it should send the pizza associated with that component into the Pizza form.

The pizza form will then render the information about the pizza in the form, which will be editable.

When the form is submitted, the information should be reflected in your table and persist in the backend.