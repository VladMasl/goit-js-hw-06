const listEl = document.querySelectorAll("#categories .item");

const titleEl = document.querySelectorAll("#categories .item h2");

const elements = document.querySelectorAll("#categories .item ul");

let listElLeng = [];

const el = elements.forEach(list =>{
    listElLeng.push(list.children.length) 
})

console.log("Number of categories:", listEl.length);

console.log("Category:", titleEl[0].textContent);
console.log("Elements:", listElLeng[0]);
console.log("Category:", titleEl[1].textContent);
console.log("Elements:", listElLeng[1]);
console.log("Category:", titleEl[2].textContent);
console.log("Elements:",listElLeng[2]);
