const express=require('express');
const appRoute=express.Router();
const control=require('../controller/appcontroller')

appRoute.route('/').get(control.home);
appRoute.route('/create').get(control.create);
appRoute.route('/setUser').post(control.update);
appRoute.route('/clear').get(control.clear);

module.exports=appRoute;