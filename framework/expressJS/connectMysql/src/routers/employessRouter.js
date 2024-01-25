const controller = require('./../controllers/employeeController');
var express = require('express');
var router = express();

router.get('/allemployees', controller.allEmployees);
router.get('/alldepartments', controller.allDepartments);
router.post('/createemployee', controller.createEmployee);
module.exports = router;