const { Pizza } = require('../models');

const pizzaController = {
    // get all pizzas  - GET / api/pizzas   (getAllPizza() uses the following foute. It uses the Mongoose .find() method like Sequelize .findAll method)
    getAllPizza(req, res) {
      Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one pizza by id  (.getPizzaById() uses the Mongoose .findOne() method to find a single pizza by its _id. Instead of accessing the entire req, we've destructured params out of it, because that's the only data we need for this request to be fulfilled)
  // get one pizza by id
  getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

// createPizza (POST /api/pizzas method for handling to add a pizza to the DB)
createPizza({ body }, res) {
    Pizza.create(body)
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.status(400).json(err));
  },

// update pizza by id  (the method for updating a pizza when we make a request to PUT /api/pizzas/:id)
updatePizza({ params, body }, res) {
  Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbPizzaData => {
      if (!dbPizzaData) {
        res.status(404).json({ message: 'No pizza found with this id!' });
        return;
      }
      res.json(dbPizzaData);
    })
    .catch(err => res.status(400).json(err));
},

// delete pizza (method to delete a pizza from the database when we make a request to DELETE /api/pizzas/:id)
deletePizza({ params }, res) {
  Pizza.findOneAndDelete({ _id: params.id })
    .then(dbPizzaData => {
      if (!dbPizzaData) {
        res.status(404).json({ message: 'No pizza found with this id!' });
        return;
      }
      res.json(dbPizzaData);
    })
    .catch(err => res.status(400).json(err));
}

  }


module.exports = pizzaController;