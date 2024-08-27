const express = require("express")
const userController = require('./controllers/userController')
const projectController = require('./controllers/projectController')
const jwt = require('./middleware/jwtMiddleware')
const multer = require('./middleware/multerMiddleware')



const router = new express.Router()

router.post("/register",userController.registerController)

router.post('/login',userController.loginController)

router.post("/add-project",jwt,multer.single("projectImg"),projectController.addProjectController)

router.get('/home-project',projectController.getHomeProjectController)

router.get('/all-project',projectController.getAllProjectController)

router.get('/user-project',jwt,projectController.getUserProjectController)

router.delete('/remove-userproject/:id',projectController.deleteUserProjectController)

router.put('/edit-project/:id',jwt,multer.single("projectImg"),projectController.updateUserProjectController)

router.put('/update-profile',jwt,multer.single("profile"),userController.updateProfileController)
//export
module.exports = router