/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
userStorage = new LocalStorage('./storage/');

router.get('/', function(request, response) {
  response.render('index');
});

router.post('/', function(request, response) {
  const name = request.body.name;
  getUserData(name);
  response.redirect(`/shirts/${name}`);
});

router.get('/shirts/:name', function(request, response) {
  const name = request.params.name;
  const data = getUserData(name);
  response.locals.data = data;
  response.locals.username = name;
  response.render('shirts/index');
});

router.post('/shirts/:name', function(request, response) {
  const value = request.body.shirttext;
  const name = request.params.name;
  const data = getUserData(name);
  data['shirts'].push(value);
  const newData = JSON.stringify(data);
  userStorage.setItem(name, newData);
  response.redirect(`/shirts/${name}`);
});

router.get('/shirts/delete/:username/:id', function(request, response) {
  const name = request.params.username;
  const id = request.params.id;
  const data = getUserData(name);
  data['shirts'].splice(id,id);
  const newData = JSON.stringify(data);
  userStorage.setItem(name, newData);
  response.redirect(`/shirts/${name}`);
});

const getUserData = (username) => {
  if(userStorage.getItem(username)) {
    const data = JSON.parse(userStorage.getItem(username));
    return data;
  } else {
    userStorage.setItem(username, '{"shirts": []}')
  }
}

/* EXPORT MODULE
----------------------------------------- */
module.exports = router;
