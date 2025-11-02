const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pokeneaController');

router.get('/api/random', ctrl.randomJson);
router.get('/', ctrl.randomView);

module.exports = router;
