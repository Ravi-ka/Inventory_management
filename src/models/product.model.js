export default class ProductModel{
    constructor(_id, _name, _desc, _price, _imgUrl){
        this.id=_id,
        this.name=_name,
        this.desc=_desc,
        this.price=_price,
        this.imgUrl=_imgUrl
    }

     static get(){
        return products;
     }
}

var products = [
    new ProductModel(1,'Product 1','This is the first product',23,'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png'),
    new ProductModel(2,'Product 2','This is the first product',23,'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png'),
    new ProductModel(3,'Product 3','This is the first product',23,'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png'),

];