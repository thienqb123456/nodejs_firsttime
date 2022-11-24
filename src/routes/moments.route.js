const express = require('express');
const router = express.Router();
const momentsController = require('../app/controllers/MomentController');

router.get('/create', momentsController.create);
router.post('/store', momentsController.store);
router.post('/form-actions', momentsController.actionForm);
router.get('/:slug', momentsController.show);
router.get('/:id/edit', momentsController.edit);
router.put('/:id', momentsController.update);
router.delete('/:id', momentsController.delete);
router.patch('/:id/restore', momentsController.restore);
router.delete('/:id/force', momentsController.forceDelete);

router.get('/', momentsController.index);

module.exports = router;
