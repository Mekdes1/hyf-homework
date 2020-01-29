
console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);
const searchItem = document.getElementById('search');
const item = document.getElementById('searchFor');
const select=document.getElementById('choose');
const chartAdd = document.getElementById('addItem');
const yourChart = document.getElementById('yourItems');

function renderProducts(){
  
let avialbleProducts = products.filter(items => {
    
    
    for (let i=0; i<items.shipsTo.length;i++ ){
    
    if(item.value === items.name.toLowerCase() && select.value === items.shipsTo[i]){
        return true
    } else {
        return false
    }

    }
    
});  // Searching for products and Showing products that ships to country 

    avialbleProducts.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });

};





searchItem.addEventListener('click',renderProducts);



function addtoChart(){
    let avialbleProducts = products.filter(items => {
    
        for (let i=0; i<items.shipsTo.length;i++ ){
            
        if(item.value === items.name.toLowerCase() && select.value === items.shipsTo[i]){
            return true
        } else {
            return false
        }
    
        }
        
    });
    
        avialbleProducts.forEach(product => {
            const li = document.createElement('li');
    
            let shipsToHTML = '';
            product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);
    
            li.innerHTML = `
                <ul>
                    <li>${product.name}</li>
                    <li>${product.price}</li>
                </ul>
            `;
            yourChart.appendChild(li);
        });
    
    }; // add to shopping cart 
    
    chartAdd.addEventListener('click',addtoChart);



/* Price analytics */ 


const productPrice = products.map(item =>item.price);  // An array of the prices of the products.

const callback = (confirmation) => console.log(confirmation); // A callback function with a parameter.

sendPricesToServer(productPrice, callback); // Console.log out the response from the server.

    





=======
console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);
const searchItem = document.getElementById('search');
const item = document.getElementById('searchFor');
const select=document.getElementById('choose');
const chartAdd = document.getElementById('addItem');
const yourChart = document.getElementById('yourItems');

function renderProducts(){
  
let avialbleProducts = products.filter(items => {
    
    
    for (let i=0; i<items.shipsTo.length;i++ ){
    
    if(item.value === items.name.toLowerCase() && select.value === items.shipsTo[i]){
        return true
    } else {
        return false
    }

    }
    
});  // Searching for products and Showing products that ships to country 

    avialbleProducts.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });

};





searchItem.addEventListener('click',renderProducts);



function addtoChart(){
    let avialbleProducts = products.filter(items => {
    
        for (let i=0; i<items.shipsTo.length;i++ ){
            
        if(item.value === items.name.toLowerCase() && select.value === items.shipsTo[i]){
            return true
        } else {
            return false
        }
    
        }
        
    });
    
        avialbleProducts.forEach(product => {
            const li = document.createElement('li');
    
            let shipsToHTML = '';
            product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);
    
            li.innerHTML = `
                <ul>
                    <li>${product.name}</li>
                    <li>${product.price}</li>
                </ul>
            `;
            yourChart.appendChild(li);
        });
    
    }; // add to shopping cart 
    
    chartAdd.addEventListener('click',addtoChart);



/* Price analytics */ 


const productPrice = products.map(item =>item.price);  // An array of the prices of the products.

const callback = (confirmation) => console.log(confirmation); // A callback function with a parameter.

sendPricesToServer(productPrice, callback); // Console.log out the response from the server.

    






