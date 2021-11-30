const router = require('express').Router();

const enterpriseController = require('../controllers/enterpriseController');

router.get('/', enterpriseController.list);
router.post('/add', enterpriseController.save);
router.get('/update/:id', enterpriseController.edit);
router.post('/update/:id', enterpriseController.update);
router.get('/delete/:id', enterpriseController.delete);

module.exports = router;

