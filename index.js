import express from 'express'
import ProductController from './src/controllers/product.controller.js'
import path from 'path';
import ejslayouts from 'express-ejs-layouts'
import validatorRequest from './middleware/validation.middleware.js';

const server = express();
// parse form data
server.use(express.urlencoded({extended:true}))



// Setup view engine settings
server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),'src','views')) //We need to mention the path that ejs is being used. And we need to import the 'path' to this server file. 

server.use(ejslayouts);



const productController = new ProductController();
server.get('/',productController.getProducts)
server.get('/new',productController.getAddForm)
server.post('/',validatorRequest,productController.addNewProduct)
server.use(express.static('src/views'));

server.listen(3400,()=>{
    console.log('Server is listening on 3400');
})