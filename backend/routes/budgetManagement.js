var express = require('express');
var router = express.Router();

const budgetManagementController = require('../controllers/BudgetManagementController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/all', budgetManagementController.all);
router.post('/create', budgetManagementController.create);
router.post('/update/:id', budgetManagementController.update);
router.post('/delete/:id', budgetManagementController.delete);
router.get('/last-register/:quantity', budgetManagementController.lastRegister);
router.get('/total-balance', budgetManagementController.totalBalance);
router.get('/find-register/:id', budgetManagementController.findRegisterByID);

module.exports = router;
