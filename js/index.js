// // element selectors in HTML

import { fetchData } from "./api.js";

// // 1. getting element by class name

// let title = document.getElementsByClassName('title');
// console.log(title);

// //2. getting Element by id

// let para = document.getElementById('para');

// // 3. Query selectors
// let tage = document.querySelector('h1');
// let className = document.querySelector('.title');
// let idName = document.querySelector('#para');

// // 4. querySelectorAll it picks all the elements that matches the 
// // selector in a node list (in HTML elements)

// let allTage = document.querySelectorAll('h1');
// let allClassName = document.querySelectorAll('.title');
// let allIdName = document.querySelectorAll('#para');

// // 5. getting element by tag name

// let tag = document.getElementsByTagName('h1');


// // 6. getting element by css selectors
// let ccsTag = document.querySelector('.title span a');
// let cssId = document.querySelector('#para a');

// // 7. getting element by HTML Object Collection

// let htmlCollection = document.forms[0].elements;




// // editing the content of the selected elements
// // innerHTML property
// title[0].innerHTML = 'A Login Form';
// title[0].style = 'color: red; font-size: 30px; text-align: center; padding: 10px; border-radius: 10px;'

// // updating the word into the uppercase

// let paragraph = document.getElementsByTagName('p');
// paragraph[0].innerHTML = paragraph[0].innerHTML.charAt(0).toUpperCase();


// // creating a new element and adding it to the DOM

// let newElement = document.createElement('p');

// newElement.innerHTML = `<div class="card" style="border: 1px solid #ccc; padding: 20px; margin: 20px; border-radius: 10px;">
// <img src="/media/images.jpg" alt="Guide" style="width: 100px; height: 100px;"> 
// <h2>New Element</h2>
// <p>This is a new element added to the DOM.</p>
// </div>`;

// document.body.appendChild(newElement);

// // removing an element from the DOM

// let removeElement = document.getElementById('form');
// removeElement.remove();


// console.log(title);



// selecting an element in html

const products = document.querySelector("#products");

const element = document.createElement("section");

products.appendChild(element);

// function displayProducts(productsData) {
//   element.innerHTML = "";

//   productsData.forEach((product) => {
//     element.innerHTML += `
//     <div class="card" style="display: flex; flex-direction; row; gap: 20px; padding: 20px; border: 2px solid #ccc; border-radius: 10px; margin: 20px; shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
//     <div class="image" style="display: flex; justify-content: center; align-items: center; margin-bottom: 10px; @media (min-width: 768px) { margin-bottom: 10px; } @media (min-width: 300px) { margin-bottom: 10px; }">
//      <img src="${product.thumbnail}" alt="${product.title}" style="width: 100px;">
//      </div>

//      <div class="content" style="text-align: start; @media (min-width: 768px) { text-align: center; width: 100%; text-wrap: break-word; } @media (min-width: 300px) { text-align: center; width: 100%; text-wrap: break-word;}">

//      <h2>${product.title}</h2>
//      <p class="description" style="text-align: start; text-clip: ellipsis; min-width: 600px; @media (min-width: 768px) { text-align: center; min-width: 50; text-wrap: break-word; }">
//      ${product.description}
//      </p>

//      <p class="price" style="text-align: start;">
//       Price: $${product.price}

//       </p>

//       </div>
//       </div>

//         `;

//   });
// }

function displayProducts(productsData) {
  element.innerHTML = "";

  productsData.forEach((product) => {
    element.innerHTML += `
            <div class="card">

                <div class="image">
                    <img
                        src="${product.thumbnail}"
                        alt="${product.title}"
                    >
                </div>

                <div class="content">
                    <h2>${product.title}</h2>

                    <p class="description">
                        ${product.description}
                    </p>

                    <p class="price">
                        Price: $${product.price}
                    </p>
                </div>

            </div>
        `;
  });
}


async function getProducts() {
  let productsData = await fetchData();
  let localStorageData = localStorage.getItem("products");
  if (!productsData) {
    element.innerHTML =
      '<p class="error" style="color: red; font-weight: bold; text-align: center; justify: center; font-size: 20px; margin-top: 20px;">Error fetching products. Please try again later.</p>';
    return;

  }
  if (productsData.length === 0) {
    element.innerHTML =
      '<p class="error" stylwl="color: red; font-weight: bold; text-align: center; font-size: 20px; margin-top: 20px;">No products found.</p>';
    return;

  }

  console.log(localStorageData);

  displayProducts(productsData);

}

getProducts();

