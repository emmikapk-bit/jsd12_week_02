//Productlist handmade dolls
let productList = ["handmade_dolls_01", "handmade_dolls_02", "handmade_dolls_animal_01","handmade_dolls_animal_02"];

//products data
const products_a_01 = {
productId: "handmade_dolls_01",
productName: "handmade dolls white",
price: 199,
inStock: true
}
const products_a_02 = {
productId: "handmade_dolls_02",
productName: "handmade dolls Black",
price: 199,
inStock: true
}
const products_b_01 = {
productId: "handmade_dolls_animal_01",
productName: "handmade dolls dog pink",
price: 199,
inStock: true
}
const products_b_02 = {
productId: "handmade_dolls_animal_02",
productName: "handmade dolls dog yellow",
price: 199,
inStock: true
}

//cart data
let cart = [
    { productId: "handmade_dolls_01", 
      quantity: 10,
    },

    { productId: "handmade_dolls_02", 
      quantity: 9,
    },

    { productId: "handmade_dolls_animal_01", 
      quantity: 8,
    },

    { productId: "handmade_dolls_animal_02", 
      quantity: 7,
    },
];



console.log("Product List: ", productList);
console.log("ProductA: ", [products_a_01, products_a_02]);
//console.log("ProductB: ", [products_b_01, products_b_02]);
console.log("Cart: ", cart);