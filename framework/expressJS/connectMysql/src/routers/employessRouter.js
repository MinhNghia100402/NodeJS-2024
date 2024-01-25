const controller = require('./../controllers/employeeController');
var express = require('express');
var router = express();

router.get('/allemployees', controller.gettAllEmployees);
router.get('/alldepartments', controller.getAllDepartments);
router.post('/createemployee', controller.createEmployee);
router.post('/updateemployee', controller.updateEmployee);
router.post('/deleteemployee', controller.deleteEmployee);
router.post('/getoneemployee', controller.getOneEmployee);
module.exports = router;