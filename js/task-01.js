const listEl = document.querySelectorAll("#categories .item");

const titleEl = document.querySelectorAll("#categories .item h2");

const elements = document.querySelectorAll("#categories .item ul");

console.log("Number of categories:", listEl.length);

console.log("Category:", titleEl[0].textContent);
console.log("Elements:", elements[0].children.length);
console.log("Category:", titleEl[1].textContent);
console.log("Elements:", elements[1].children.length);
console.log("Category:", titleEl[2].textContent);
console.log("Elements:", elements[2].children.length);
