/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
userStorage = new LocalStorage('./storage/');

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/', function(req, res) {
  const name = req.body.name;
  getUserData(name);
  res.redirect(`/shirts/${name}`);
});

router.get('/shirts/:name', function(req, res) {
  const name = req.params.name;
  const data = getUserData(name);
  res.locals.data = data;
  res.locals.username = name;
  res.render('shirts/index');
});

router.post('/shirts/:name', function(req, res) {
  const value = req.body.shirttext;
  const name = req.params.name;
  const data = getUserData(name);
  data['shirts'].push(value);
  const newData = JSON.stringify(data);
  userStorage.setItem(name, newData);
  res.redirect(`/shirts/${name}`);
});

router.get('/shirts/delete/:username/:id', function(req, res) {
  const name = req.params.username;
  const id = req.params.id;
  const data = getUserData(name);
  data['shirts'].splice(id,id);
  const newData = JSON.stringify(data);
  userStorage.setItem(name, newData);
  res.redirect(`/shirts/${name}`);
});

router.get('/shirts/edit/:username/:id', function(req, res) {
  const name = req.params.username;
  const id = req.params.id;
  const data = getUserData(name).shirts[id];
  res.locals.text = data;
  console.log(data);
  res.render('shirts/edit');
});

router.post('/shirts/edit/:username/:id', function(req, res) {
  const name = req.params.username;
  const id = req.params.id;
  const newText = req.body.shirttext;
  const data = getUserData(name);
  data.shirts[id] = newText;
  userStorage.setItem(name, JSON.stringify(data));
  res.redirect(`/shirts/${name}`);
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
