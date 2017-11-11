'use strict';

module.exports = function(app) {

  var gameList = require('../controllers/gameController');

  app.route('/')
    .get(function(req, res) {
      res.json({ message: "Success" });
    });

  // todoList Routes
  app.route('/games')
    .get(gameList.listAllGames);
    //.post(gameList.createGame);

/*
  app.route('/tasks/:taskId')
    .get(gameList.read_a_task)
    .put(gameList.update_a_task)
    .delete(gameList.delete_a_task);
*/
};