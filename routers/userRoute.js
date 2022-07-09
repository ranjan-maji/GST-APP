const router = require('express').Router();
const userController = require('../controllers/userController');
const { verifyUser, verifyAdmin } = require("../middleware/verifyToken");


router.post('/', userController.signUp);

router.post("/login", userController.logIn);




module.exports = router;