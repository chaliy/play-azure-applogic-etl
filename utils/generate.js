let faker = require('faker');
let builder = require('xmlbuilder');
let xml = x => builder.create(x).end();
let rnd = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let lpad = (number, digits) => ('00000000000000000000000'+number).slice(-digits);
let writeFileSync = require('fs').writeFileSync;

let repair = () => ({
  Repair: {
    SerialNumber: lpad(rnd(0, 999999999), 9),
    ArticleNumber: lpad(rnd(0, 999999999), 9),
    Country: {
      CodeCountry: faker.address.countryCode()
    },
    CustomerNumber: lpad(rnd(0, 999999999), 9),
    RepairOrderNumber: `RO${lpad(rnd(0, 9999999), 7)}`,
    RepairDate: {
      DateYYYY: rnd(2013, 2016),
      DateMM: rnd(1, 12),
      DateDD:  rnd(1, 30)
    },
    Status: 'Success'
  }
})

let payload = xml({
  Records: [
    repair(),
    repair(),
    repair(),
    repair()
  ]
});

console.log(`${__dirname}\\..\\data\\upload\\2016_07_19_15_00_00_0000_repair.xml`);

writeFileSync(`${__dirname}\\..\\data\\upload\\2016_07_19_15_00_00_0000_repair.xml`, payload);
