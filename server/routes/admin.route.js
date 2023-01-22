import express from 'express'
import adminControlle2 from '../controller/admin.controller.js'

const adminRoutes = express.Router()

adminRoutes.get('/add', adminControlle2.addCar)

adminRoutes.get('/showcars',adminControlle2.showCars)

adminRoutes.post('/login',adminControlle2.login)

export default adminRoutes