const express = require('express');

const ctrl = require('../../controllers/auth');
const { ctrlWrapper } = require('../../helpers');
const {authenticate, upload} = require("../../middlewares")


const router = express.Router();

router.post('/register', ctrlWrapper(ctrl.register));

router.post('/login', ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));


module.exports = router;