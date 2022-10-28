const express = require('express')

const { ctrlWrapper } = require('../../helpers');
const {isValidId, authenticate} = require('../../middlewares')
const {add, getAll, getById, updateById, updateFavorite, removeById} = require('../../controllers/contacts');

const router = express.Router()


router.get('/', authenticate, ctrlWrapper(getAll));

router.get('/:contactId', authenticate, isValidId, ctrlWrapper(getById));

router.post('/', authenticate, ctrlWrapper(add));

router.delete('/:contactId', authenticate, isValidId, ctrlWrapper(removeById))

router.put('/:contactId', authenticate, isValidId, ctrlWrapper(updateById));

router.patch('/:contactId/favorite', authenticate, isValidId, ctrlWrapper(updateFavorite));


module.exports = router
