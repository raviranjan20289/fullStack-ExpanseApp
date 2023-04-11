const express = require("express");

const router = express.Router();

const {getTask, postAddTask, getAllExpanse,deleteExpanse,updateExpanse, getSingleExpanse} = require("../controllers/task");

router.route('/getTask').get(getTask);

router.route('/addTask').post(postAddTask);

router.route('/getAllExpanse').get(getAllExpanse);

router.route('/getSingleExpanse/:id').get(getSingleExpanse);

router.route('/deleteExpanse/:id').delete(deleteExpanse);

router.route('/:id').put(updateExpanse);


module.exports = router;