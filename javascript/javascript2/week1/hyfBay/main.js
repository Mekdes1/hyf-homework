console.log('Script loaded');

console.log(getAvailableProducts());

const listOfProducts = document.getElementById('productList');
const allProducts = getAvailableProducts();  

    
    function renderProducts(products){
        
        for(let i=0;i<products.length;i++){
        
       
        const addProduct = document.createElement('LI');
        const itemsList = document.createElement('UI');
        const shipping = document.createElement('LI');
        let shipsTo = document.createElement('UL');
        const rating = document.createElement('LI');
        const price = document.createElement('LI');
        const name = document.createElement('LI');   // creat elements 

        name.className="name";
        price.className="price";
        rating.className="rating";
        shipping.className="ships-to";  // added class names to the created elements

       
        

        price.innerHTML = products[i].price;
        name.innerHTML  = products[i].name;
        rating.innerHTML = products[i].rating;  // set inner Html to the created elements
       
       
        addProduct.appendChild(itemsList);
        itemsList.appendChild(name);
        itemsList.appendChild(price);
        itemsList.appendChild(rating);
        itemsList.appendChild(shipping);    // appending child elments 

       
        addProduct.appendChild(itemsList);
        listOfProducts.appendChild(addProduct);  // appending the li to the main ul created in the html file
        
        
        shipping.appendChild(shipsTo);
       
        for (let j=0; j < products[i].shipsTo.length; j++){
            let  country = document.createElement('LI');
            country.innerHTML =  products[i].shipsTo[j];
            shipsTo.appendChild(country);                 // get all the items in products[i].shipto and append it to the main ul
        }
    
    }
}


renderProducts(allProducts);

