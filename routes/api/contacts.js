const express = require('express')

const { ctrlWrapper } = require('../../helpers');
const {isValidId} = require('../../middlewares')
const {add, getAll, getById, updateById, updateFavorite, removeById} = require('../../controllers/contacts');

const router = express.Router()


router.get('/', ctrlWrapper(getAll));

router.get('/:contactId', isValidId, ctrlWrapper(getById));

router.post('/', ctrlWrapper(add));

router.delete('/:contactId', isValidId, ctrlWrapper(removeById))

router.put('/:contactId', isValidId, ctrlWrapper(updateById));

router.patch('/:contactId/favorite', isValidId, ctrlWrapper(updateFavorite));


module.exports = router
