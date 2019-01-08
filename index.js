const faker = require('faker');

for (let i=0; i<150; i++){
    const name = faker.internet.userName();
    const email = faker.internet.email();
    console.log(`${name};${email};regular`);
}
