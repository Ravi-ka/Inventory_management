import express from 'express'
import ProductController from './src/controllers/product.controller.js'
import path from 'path';
import ejslayouts from 'express-ejs-layouts'

const server = express();

// Setup view engine settings
server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),'src','views')) //We need to mention the path that ejs is being used. And we need to import the 'path' to this server file. 

server.use(ejslayouts);


const productController = new ProductController();
server.get('/',productController.getProducts)
server.get('/new',productController.getAddForm)
server.post('/',productController.addNewProduct)
server.use(express.static('src/views'));

server.listen(3400,()=>{
    console.log('Server is listening on 3400');
})