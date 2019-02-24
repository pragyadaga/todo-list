const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");

// Load input validation
const validateNewTodoInput = require("../../validation/new-todo");

// Load Todo model
const Todo = require("../../models").Todo;

// @route POST api/todos/new
// @desc Authenticate user and create a todo item
// @access Public

router.post("/new", passport.authenticate('jwt', { session: false }), function(req, res) {
  // Form validation
  const { errors, isValid } = validateNewTodoInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(422).json(errors);
  }

  Todo.create({
    title: req.body.title,
    userId: req.user.id,
  }).then(
    todo => res.json({msg: 'Todo created successfully'})
  ).catch(
    err => res.status(500).json({ error: err })
  );
});

// @route GET api/todos/
// @desc Authenticate user and list all the todo items
// @access Public

router.get("/", passport.authenticate('jwt', { session: false }), function(req, res) {
  console.log('user', req.user.firstName);
  console.log('user.id', req.user.id);

  Todo.findAll({
    where: { userId: req.user.id },
    attributes: ['id', 'title', 'completed']
  }).then(function(all_todos) {
    res.json({todos: all_todos});
  }).catch(
    err => res.status(500).json({error: 'Error in fetching all the todos of the user'})
  );
});

router.post("/:id/complete", passport.authenticate('jwt', { session: false }), function(req, res) {
  console.log('user', req.user.firstName);
  console.log('user.id', req.user.id);

  Todo.update(
    { completed: true},
    { where: { id: req.params.id }}
  ).then(function(all_todos) {
    res.json({msg: 'Successfully marked Todo as complete'});
  }).catch(
    err => res.status(500).json({error: 'Error in marking todo as complete'})
  );
});

router.delete("/:id", passport.authenticate('jwt', { session: false }), function(req, res) {
  console.log('user', req.user.firstName);
  console.log('user.id', req.user.id);

  Todo.destroy(
    { where: { id: req.params.id }}
  ).then(function(all_todos) {
    res.json({msg: 'Successfully deleted Todo'});
  }).catch(
    err => res.status(500).json({error: 'Error in deleting todo'})
  );
});

module.exports = router
