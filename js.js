let kitchenProducts = [
  {
    type: 'grater',
    price: 10
  },
  {
    type: 'pastry-bag',
    price: 25
  },
  {
    type: 'scale',
    price: 5
  },
  {
    type: 'whisk',
    price: 15
  }
];

let devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000]
  },
  {
    type: 'laptop',
    price: [50, 1500]
  },
  {
    type: 'smartphone',
    price: [80, 2000]
  },
  {
    type: 'tablet',
    price: [20, 1300]
  }
];

let cosmeticsProducts = [
  {
    type: 'blush',
    price: 100
  },
  {
    type: 'eyeshadow',
    price: 50
  },
  {
    type: 'lipstick',
    price: 80
  },
  {
    type: 'nail-polish',
    price: 200
  },
  {
    type: 'perfume',
    price: 300
  }
];

let Kitchen = { category: 'kitchen' };
let Devices = { category: 'devices' };
let Cosmetics = { category: 'cosmetics' };

// kitchenProducts.forEach((el) => {
//   let = Object.create(kitchen);
// });

// console.log(kitchenProducts);

function getEntries(arr, obj) {
  const array = [];
  Object.entries(arr).reduce((acc, [key, value]) => {
    this[value.type] = Object.create(obj);
    this[value.type] = value;

    const render = `
        <div class="includes ${this[value.type].type}">
            <img src="images/${obj.category}/${this[value.type].type}.svg" alt="${
      this[value.type].type
    }">
            <p> Name: <span class="bold">${this[value.type].type}</span> </p>
            <p> Price: <span class="bold">${this[value.type].price}</span> </p>
        </div>
    `;

    array.push(render);
  }, '');

  return array.join('');
}

const kitchen = getEntries(kitchenProducts, Kitchen);

console.log(kitchen);
const devices = getEntries(devicesProducts, Devices);
const cosmetics = getEntries(cosmeticsProducts, Cosmetics);

document.write(`
    <div class="wrapper">
        <h2> Category: ${Kitchen.category} </h2>
        <div class="category kitchen">
                ${getEntries(kitchenProducts, Kitchen)}
        </div>

        <h2> Category: ${Devices.category} </h2>
        <div class="category devices">
                ${getEntries(devicesProducts, Devices)}
        </div>

        <h2> Category: ${Cosmetics.category} </h2>
        <div class="category cosmetics">
                ${getEntries(cosmeticsProducts, Cosmetics)}
        </div>
    </div>
`);
