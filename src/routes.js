const express = require("express"); 
const routes=express();
const siteController=require("../src/siteController");

routes.get('/',siteController.displayAllProducts);

routes.get('/:id',siteController.displayProduct);

routes.post('/',siteController.addProduct);

routes.patch('/:id',siteController.updateProduct);

routes.delete('/:id',siteController.deleteProduct);

routes.delete('/',siteController.deleteAllProducts);

module.exports = routes;