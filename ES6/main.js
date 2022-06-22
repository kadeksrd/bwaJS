// es 5
var myName = `kadek`;

myName = `kadek2`;

console.log(myName);

var myCars = [`bmw`, `mazda`, `toyota`];

for (var i = 0; i < myCars.length; i++) {
  console.log(myCars[i]);
}

console.log(i);

// kalo gunakan var akses fornya masih bisa di deklarasi

// cara seperti ini berbahaya karena suatu nilai bisa diubah yang nantinya bisa mengubah data

// es 6

//  const

// variabel yang datanya ga bisa diubah
// disini kita gunakan `const` agar data tidak diubah

const myCar = `Lambo`;
// myCar = `Avanza`

console.log(myCar);

//  Let

// variabel yang datanya bisa diubah

let myCar2 = `avz`;
myCar2 = `miata`;

// tes

// for

const myCar3 = [`lambo`, `avz`, `suzuki`];
for (let i = 0; i < myCar3.length; i++) {
  console.log(myCar3[i]);
}

// string congcat

const userPlaced = document.getElementById(`user`);

// mengetahui user login

const userLogged = `kadek`;
userPlaced.innerHTML = `Selamat Pagi ${userLogged}`;

// object literal

const cart_items = document.querySelector(`#cart`);

// es5
// const addProduct = (name, category) => {
//     return{
//         name: name,
//         category: category
//     }
// }

// let getProduct = addProduct(`iphone 11`, `gadget`);
// console.log(getProduct)

// es6

const addProduct = (name, category) => {
  return {
    name,
    category,
  };
};

let getProduct = addProduct(`iphone 11`, `gadget`);

// add cart
cart_items.innerHTML = `Product :  ${getProduct.name} category ${getProduct.category}`;

// foreach Array

const skill_holder = document.getElementById(`skills`);

let parent = `<ul>`;

const mySkills = [`coding`, `music`, `gaming`];
console.log(mySkills[0]);

// menambahkan skills
mySkills.push(`devOps`);

// menampilkan skills sekaligus dengan looping foreach
mySkills.forEach((skils) => {
  parent += `<li>${skils}</li>`;

  console.log(skils);
});

parent += `</ul>`;

<<<<<<< Updated upstream
skill_holder.innerHTML = parent;


// map , filter
=======

// skill_holder.innerHTML = parent;

// map , filter

//  map
// untuk mempetakan

const judul = `<h2>MAP JAVASCRIPT</h2>`;

const printSkills = mySkills.map((skills) => {
  return skills;
});

// filter
// untuk memfilter Array

// contoh ingin memfilter coding agar yang di tampilkan condiung saja

const myLoveSkill = mySkills.filter((skill) => {
  return skill !== `coding`;
});

skill_holder.innerHTML = myLoveSkill;
>>>>>>> Stashed changes

<<<<<<< Updated upstream
const tst = 1245
=======
<<<<<<< Updated upstream

const test = 123;
=======
const tst = 1245
const mySkills = 124562
>>>>>>> Stashed changes
>>>>>>> Stashed changes
