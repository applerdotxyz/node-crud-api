/* eslint-disable */
const express = require('express'); // @todo :: switch to imports
const router = express.Router();
/* eslint-enable */

// var habitat = require('habitat');
const MINUS_ONE = 1;

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',

  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',

  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',

  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',

  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',

  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info',

  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz',

  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.me',

  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io',

  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz',

  },

];

// GET - get user by id
router.get('/users/:id', (req, res) => {
  res.send(users[req.params.id - MINUS_ONE]);
});

// PUT - modify user details by id
router.put('/users/:id', (req, res) => {
  if (req.body.name) {
    users[req.params.id - MINUS_ONE].name = req.body.name;
  }
  if (req.body.email) {
    users[req.params.id - MINUS_ONE].email = req.body.email;
  }

  res.send('done!');
});

// POST - add new user
router.post('/users/:id', (req, res) => {
  users[req.params.id - MINUS_ONE] = {
    id: req.params.id,
    name: req.body.name,
    email: req.body.email,
  };
  res.send('done!');
});

// DELETE - delete a user by id
router.delete('/users/:id', (req, res) => {
  /* eslint-disable */
  delete users[req.params.id - MINUS_ONE];
  /* eslint-enable */
  res.send('done!');
});

 /* eslint-disable */
 module.exports = router; // @todo :: switch to es6 import/export
 /* eslint-enable */
