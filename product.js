class Product {
    constructor(id, name, description, price, stock, offer, img){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.stock = stock
        this.offer = offer
        this.img = img
    }

    hasValidOffer() {
        if (this.offer != null){
            return this.offer.isValid()
        } else {
            return false;
        }
    }
    modifiedPriceByOffer() {
        return this.price * this.offer.discount
    }

    asInnerHTMLForSection(){
        return(
        `<div class="container text-center mt5 py-5">
            <h2>PSICO Originals</h2>
            <hr>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="product text-center col-lg-3 col-md-4 col-12">
            <img class="img-fluid mb-3" src="${this.img}" alt=""> 
            <h4 class="p-name">${this.name}</h4>
            <h3 class="p-price">${this.price}</h3>
            <button class="buy-btn">Buy Now</button>
          </div>
          
        </div>`
        )
    }
}