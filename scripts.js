//fetching the products
let ul = document.getElementById('products');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
var btnProducts = document.getElementById('btnProducts')
btnProducts.addEventListener('click', function(e) {
    var productsUrl = "http://localhost:5000/products"
    fetch(productsUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            return data.map(product => {
                let li = createNode('li');
                li.innerHTML = `${product.name}`
                append(ul, li)
            })
        })
        .catch(function(error) {
            console.log(error);
        })
});



// fetching the fruits
let fruList = document.getElementById('fruList');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
var btnFruits = document.getElementById('btnFruits')
btnFruits.addEventListener('click', function(e) {
    var productsUrl = "http://localhost:5000/products/fruits"
    fetch(productsUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            return data.map(product => {
                let li = createNode('li');
                li.innerHTML = `${product.name}`
                append(fruList, li)
            })
        })
        .catch(function(error) {
            console.log(error);
        })
});

// fetching vegetables
let vegList = document.getElementById('vegList');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
var btnVeges = document.getElementById('btnVeges')
btnVeges.addEventListener('click', function(e) {
    var productsUrl = "http://localhost:5000/products/vegetables"
    fetch(productsUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            return data.map(product => {
                let li = createNode('li');
                li.innerHTML = `${product.name}`
                append(vegList, li)
            })
        })
        .catch(function(error) {
            console.log(error);
        })
});