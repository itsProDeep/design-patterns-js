 const Fedex = function () {
     this.calculateFare = function (pakage) {
        // algo
        const price = 20
        return price
    }
    
}

const SpeedPost = function () {
     this.calculateFare = function (pakage) {
    // speed post algo
    const price = 15;
    return price;
    }
}

const GenPost = function () {
     this.calculateFare = function (pakage) {
    // genPost algo
    const price = 11
    return price;
    }
}

const Shipping  = function () {
    let company = "";
     this.shippingCompany = function (company) {
        this.company = company
    }
        this.shipOrder= function (pakage) {
            const deliveryPrice = this.company.calculateFare(pakage);
            console.log("deliver charge is", deliveryPrice);
            return deliveryPrice;
        }
    
}

const fedex = new Fedex();
const speedPost = new SpeedPost();
const genPost = new GenPost();
const shipping = new Shipping();
shipping.shippingCompany(fedex);
const deliveryThroughFedex = shipping.shipOrder("");
console.log("FEDEX: ", deliveryThroughFedex);

shipping.shippingCompany(speedPost);
const deliveryThroughSpeed = shipping.shipOrder("");
console.log("SPEED: ", deliveryThroughSpeed);


shipping.shippingCompany(genPost);
const deliveryThroughGen = shipping.shipOrder("");
console.log("GEN: ", deliveryThroughGen);
