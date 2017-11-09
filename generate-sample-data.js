const faker = require('faker');
const fs = require('fs');
const path = require('path');

const fakeData = [];
const count = 10000;
const targetPath = path.resolve(__dirname, "sample-data/sample.json");

for (var i = 0; i < count; i++) {
  fakeData.push("waldo " + faker.name.lastName() + ", " + faker.name.firstName());
}

const fakeJson = JSON.stringify(fakeData);

fs.writeFile(targetPath, fakeJson, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Sample data saved");
});