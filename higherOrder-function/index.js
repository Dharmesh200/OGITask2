const arrOfElement = [{
    Id: 1,
    Name: 'Urvesh',
    isVeg: true,
    Age: 20
},
{
    Id: 2,
    Name: 'Ajay',
    isVeg: true,
    Age: 14
},
{
    Id: 3,
    Name: 'Rohit',
    isVeg: false,
    Age: 22
},
{
    Id: 4,
    Name: 'Dharmesh',
    isVeg: true,
    Age: 18
}, {
    Id: 5,
    Name: 'Pritam',
    isVeg: false,
    Age: 20
},
{
    Id: 6,
    Name: 'Tejas',
    isVeg: true,
    Age: 13
}];


//a map method using to iterate array
console.log('-----------Map method-----------');
const veg = arrOfElement.map((element) => {
    if (element.isVeg) {
        console.log(`${element.Name} is veg`);
    }
})

//b filter method is using to iterate array to achieve specific results
console.log('----------Filter method----------');
const age = arr.filter((element) => {
    if (element.isVeg && element.Age > 15) {
        console.log(`${element.Name} is veg and above 15`);
    }
});