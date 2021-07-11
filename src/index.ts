import CustomerBuilder from "./Builders/CustomerBuilder";
import ProductBuilder from "./Builders/ProductBuilder";

const customer1 = new CustomerBuilder()
    .setId(1)
    .setFirstName("June")
    .setLastName("Wanwimol Jaenasavamethee")
    .setEmail("june@gmail.com")
    .setAddress("Phuket, Thailand")
    .setAge(20)
    .build();

const customer2 = new CustomerBuilder()
    .setId(2)
    .setFirstName("Puimek")
    .setLastName("Napasorn")
    .setEmail("puimek@gmail.com")
    .setAddress("Pattaya, Thailand")
    .setHobby("Singing")
    .build()

console.log("==========")
console.log("Customer 1 : \n", customer1)
console.log("==========")

console.log("==========")
console.log("Customer 2 : \n", customer2)
console.log("==========")

console.log("=============================================")

const product1 = new ProductBuilder()
    .setId(1)
    .setName("Macbook Pro M1")
    .setType("Laptop")
    .setPrice(27000000)
    .setDescription("New Macbook Pro M1 with 16GB RAM and 512GB SSD")

const product2 = new ProductBuilder()
    .setId(2)
    .setName("HP Pavilion Gaming 15")
    .setDescription("HP Pavilion Gaming 15 with 8GB RAM DDR4 and 512GB SSD")
    .setSeller("HP Official")

console.log("==========")
console.log("Product 1 : \n", product1)
console.log("==========")

console.log("==========")
console.log("Product 2 : \n", product2)
console.log("==========")