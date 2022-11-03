const { Schema, model } = require('mongoose');

//Pizza Hunt wants the following data to be stored when users create a new pizza
// 1 - Name of the Pizza
// 2 - Name of the user that created the pizza
// 3 - A timestamp of when the pizza was created -- If no value is provided in this field when the user creates new data, the Date.now function will be executed and will provide a timestamp
// 3* - A timestamp of any updates to the pizza's data
// 4 - The pizza's suggested size
// 5 - The pizza's toppings


const PizzaSchema = new Schema({
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: []
  });


// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;