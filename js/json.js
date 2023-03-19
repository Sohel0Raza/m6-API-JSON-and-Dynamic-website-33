const user = {id: 1, name: 'Himu', job: ' Actor'};
const stringify = JSON.stringify(user);
// console.log('user :', stringify);
const shop = {
    owner: 'Sakib Khan',
    address: {
        street: '14/B Tikka aer bazar',
        city: 'Dhaka',
        country:'Uganda'
    },
    products: ['Laptop', 'Phone', 'Mic', 'Monitor', 'KeyBoard'],
    revenue: 45000,
    isOpen: true,
    isNew: false   
}
console.log(shop)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopJSONToParse = JSON.parse(shopJSON)
console.log('shopJSONToParse :', shopJSONToParse);