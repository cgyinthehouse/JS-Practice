// https://tw.alphacamp.co/blog/react-js-javascript
// 一個帶有非常多資料的物件
const product = {
    name: "iPhone",
    image: "https://i.imgur.com/b3qRKiI.jpg",
    description:
        '全面創新的三相機系統，身懷萬千本領，卻簡練易用。電池續航力突飛猛進，前所未見。令你大為驚豔的晶片更加碼機器學習技術，並突破智慧型手機所能成就的極限。第一部威力強大，Pro如其名的iPhone，全新登場',
    brand: { name: 'Apple' },
    aggregateRating: {
        ratingValue: '4.6',
        reviewCount: '120',
    },
    offers: {
        priceCurrency: 'TWD',
        price: '26,900'
    }
};


// Object destructuring Assignment
const { offers: { price } } = product;
const { name, description } = product;
console.log(price);
console.log(name);
console.log(description);


// Array destructuring Assignment
const mobileBrands =['Samsung', 'Apple', 'Huawei', 'Oppos', 
    'Vivo', 'Xiaomi', 'LG', 'Lenovo', 'ZTE' ]
const [best, second, third, ...others] = mobileBrands;
// rest syntax in array
console.log(others);

// Object spread syntax
const mobilePhone = {
    name: 'Mobile Phone',
    publishedYear : '2019'
};

const iPhone = {...mobilePhone, name: 'iPhone', os:'IOS'};
console.log(iPhone);
// 可以注意到，在原本的 mobilePhone 就已經有 name 這個屬性，
// 後來我們又添加同樣名為 name 的屬性時，就會把原本的 name 給覆蓋掉


// rest syntax
const { brand, aggregateRating, ...other } = product;
console.log(other);