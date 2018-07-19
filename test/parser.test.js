const assert = require("assert");
const parser = require("../lib/parser");
const fs = require("fs");
const cheerio = require("cheerio");

const cases = [
  {
    file: "case1.html",
    expected: {
      title:
        "RedTaro Replacement Bands for Fitbit Charge 2,Fitbit Charge 2 Accessories Wristbands",
      price: "$7.99",
      additionalDescription:
        "RedTaro Chic Print Designs for Fitbit Charge 2 Bands\n    \n\n    \n\n\n\n\n\n\n\n\n\n\n \n \n \n \n\n\n    \n    \n        \n    \n\n\n\n    \n\n\n\n\n    \n    \n        \n    \n\n\n    \n\n\n\n    \n    \n        \n    \n\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     \n \n     \n    \n\n    \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n     \n    \n\n \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n    \n        \n            RedTaro designs chic bands for Fitbit Charge 2.\n        \n    \n\n\n\n\n\n                            \n                        \n                    \n                \n                \n            \n        \n    \n        \n\n        \n        \n            \n            \n        \n\n        \n            \n                \n                \n                \n                \n\n                \n                    \n                    \n                        \n                            \n                                \n\n\n\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     \n \n     \n    \n\n    \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n        Flower Collection - Fitbit Charge 2 Bands\n    \n\n    \n        \n            \n\n\n\n\n\n\n\n\n\n\n \n \n \n \n\n\n    \n    \n        \n    \n\n\n\n    \n\n\n\n\n    \n    \n        \n    \n\n\n    \n\n\n\n    \n    \n        \n    \n\n\n        \n        \n            \n\n\n\n\n\n\n\n\n\n\n\n\n     \n    \n      \n \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n    \n        \n            To be honest, the paisley design fitbit charge 2 bands is a surprise maybe from God. LOL. We got it by chance and we made them with less expectation...but it becomes our top popular design. What a big surprise! How do you think of the popular band on fitbit charge 2?\n        \n    \n\n\n\n        \n    \n\n\n                            \n                        \n                    \n                \n                \n            \n        \n    \n        \n\n        \n        \n            \n            \n        \n\n        \n            \n                \n                \n                \n                \n\n                \n                    \n                    \n                        \n                            \n                                \n\n\n\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     \n \n     \n    \n\n    \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n        Paisley Design - Fitbit Charge 2 Accessory Bands\n    \n\n    \n        \n            \n\n\n\n\n\n\n\n\n\n\n \n \n \n \n\n\n    \n    \n        \n    \n\n\n\n    \n\n\n\n\n    \n    \n        \n    \n\n\n    \n\n\n\n    \n    \n        \n    \n\n\n        \n        \n            \n\n\n\n\n\n\n\n\n\n\n\n\n     \n    \n      \n \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n    \n        \n            I'm extremely crazy about floral things, eg. flower dresses, shoes, cups, beds sheets, bags etc. We design many floral fitbit charge 2 bands and would love to share them for you! Pink floral, blue floral, lotus, black floral etc. When you're in floral dress, would you like to get one floral fitbit charge 2 band to match the dress?\n        \n    \n\n\n\n        \n    \n\n\n                            \n                        \n                    \n                \n                \n            \n        \n    \n        \n\n        \n        \n            \n            \n        \n\n        \n            \n                \n                \n                \n                \n\n                \n                    \n                    \n                        \n                            \n                                \n\n\n\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     \n \n     \n    \n\n    \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n        Other Collection - Fitbit Charge 2 Replacement Bands Small Large\n    \n\n    \n        \n            \n\n\n\n\n\n\n\n\n\n\n \n \n \n \n\n\n    \n    \n        \n    \n\n\n\n    \n\n\n\n\n    \n    \n        \n    \n\n\n    \n\n\n\n    \n    \n        \n    \n\n\n            \n\n\n\n\n\n\n\n\n\n\n\n\n     \n    \n      \n \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n    \n        \n            Animal Collection - Fitbit Charge 2 Replacement Bands Small Large  The animal collection are we designs for pet lovers. Now it's available for animal paw print, owl, cheetah/leopard print, skull, etc. We'll design some new bands from time to time and please keep an eye on RedTaro Fitbit Charge 2 bands.\n        \n    \n\n\n\n        \n        \n            \n\n\n\n\n\n\n\n\n\n\n \n \n \n \n\n\n    \n    \n        \n    \n\n\n\n    \n\n\n\n\n    \n    \n        \n    \n\n\n    \n\n\n\n    \n    \n        \n    \n\n\n            \n\n\n\n\n\n\n\n\n\n\n\n\n     \n    \n      \n \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n    \n        \n            Fairy Design - Fitbit Charge 2 Bracelets  We designed the fairy fitbit charge 2 bands for our loved courtyard and gardening. We spent tons of happy time here, playing with little kids, holding friends parties, enjoying family dinners, doing gardening work etc. The black background means the yard soil, the butterflies or unnamed insects are flying around the beautiful flowers. It's a pretty one, would you love to get one for your fitbit charge 2?\n        \n    \n\n\n\n        \n        \n            \n\n\n\n\n\n\n\n\n\n\n \n \n \n \n\n\n    \n    \n        \n    \n\n\n\n    \n\n\n\n\n    \n    \n        \n    \n\n\n    \n\n\n\n    \n    \n        \n    \n\n\n            \n\n\n\n\n\n\n\n\n\n\n\n\n     \n    \n      \n \n\n\n    \n    \n        \n    \n\n\n\n\n\n\n    \n    \n        \n            Splash-ink Design - Fitbit Charge 2 Straps  The splash-ink fitbit charge 2 bands are designed for the persons who got a hobby of painting. The source of design inspiration comes from Chinese ink-painting technique. The painters sprinkle lots of black ink on the white drawing paper and then a painting comes into our eyes. Amazing and unbelievable! We changed the black ink into colorful one, so it becomes a colorful band. Please note that it's made in uncontrolled painting so it's irregular and probably you will get one little different from the picture showed. The design fitbit charge 2 bands are available in two sizes.The small bands fit for 5.5\"-6.7\"wrists and large bands for 6.7\"-8.1\" bands. That's all! Thank you!",
      description:
        'Designed Replacement Wrist Bands for Fitbit Charge 2, not for Fitbit Charge, Charge HR or other Fitbit models\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\tFree size to slide with buckle: Small ( 5.5"-6.7" ), Large ( 6.7"-8.1" )\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\tVariety of Colors: animal print,gray swirls,lotus, floral etc. More colors and designs will come soon;\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\tHigh Quality Material - interchangeable accessory bands for Fitbit Charge 2 is made of flexible and durable elastomer material with surgical-grade stainless steel buckle\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\tGuarantee - Bands for Fitbit Charge 2 come with 30-day money back guarantee and quick great service.',
      images: [
        "https://images-na.ssl-images-amazon.com/images/I/71ab-FDnKhL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61yFonA%2BcvL._SL1000_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61bF7cSTrwL._SL1000_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61e966Y1ZoL._SL1000_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61pJefecKwL._SL1000_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61mC%2BZSzVGL._SL1000_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71-PIZ-XudL._SL1000_.jpg"
      ]
    }
  },
  {
    file: "case2.html",
    expected: {
      title:
        "SaferCCTV (Pack of 10) F Type Push On Quick Coax Connectors Adapter for RVers Satellite Dish Cable TV Internet RV Trailer Coax Cable - 2 Years Warranty",
      price: "$8.65",
      additionalDescription: "",
      description:
        "1. Use this to make your cable easily connect and disconnect\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t2. Work with all Antenna, Satellite, and Cable TV. Fits for RVers,Satellite Dish,Cable TV,Internet,RV Trailer Coax Cable and so on\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t3.This Type F male push on to female coupler provides the ability to convert a standard Type F male interface to a push on Type F male. The interface style change is useful in many test applications where multiple couplings are needed. Use of the push on style allows quick push on mating without the need of time consuming threaded mating\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t4. Package include: 10 x F Type Push On Quick Connect Adapter as picture\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t5. Professional after-sales service - 2 Years Warranty - We do offer a 60-days money-back guarantee on all orders to allow you to test the product",
      images: [
        "https://images-na.ssl-images-amazon.com/images/I/61oh%2BNf-lKL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61x6iL-UHqL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51qV%2BFB6QOL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51rQZSnrg0L._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51bXMBphmTL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71PO9LihsAL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61xHszEqNvL._SL1001_.jpg"
      ]
    }
  },
  {
    file: "case3.html",
    expected: {
      title:
        "SaferCCTV (Pack of 10) F Type Push On Quick Coax Connectors Adapter for RVers Satellite Dish Cable TV Internet RV Trailer Coax Cable - 2 Years Warranty",
      price: "$8.65",
      additionalDescription: "",
      description:
        "1. Use this to make your cable easily connect and disconnect\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t2. Work with all Antenna, Satellite, and Cable TV. Fits for RVers,Satellite Dish,Cable TV,Internet,RV Trailer Coax Cable and so on\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t3.This Type F male push on to female coupler provides the ability to convert a standard Type F male interface to a push on Type F male. The interface style change is useful in many test applications where multiple couplings are needed. Use of the push on style allows quick push on mating without the need of time consuming threaded mating\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t4. Package include: 10 x F Type Push On Quick Connect Adapter as picture\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t5. Professional after-sales service - 2 Years Warranty - We do offer a 60-days money-back guarantee on all orders to allow you to test the product",
      images: [
        "https://images-na.ssl-images-amazon.com/images/I/61oh%2BNf-lKL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61x6iL-UHqL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51qV%2BFB6QOL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51rQZSnrg0L._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51bXMBphmTL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71PO9LihsAL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61xHszEqNvL._SL1001_.jpg"
      ]
    }
  },
  {
    file: "case4.html",
    expected: {
      title:
        "SaferCCTV (Pack of 10) F Type Push On Quick Coax Connectors Adapter for RVers Satellite Dish Cable TV Internet RV Trailer Coax Cable - 2 Years Warranty",
      price: "$8.65",
      additionalDescription: "",
      description:
        "1. Use this to make your cable easily connect and disconnect\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t2. Work with all Antenna, Satellite, and Cable TV. Fits for RVers,Satellite Dish,Cable TV,Internet,RV Trailer Coax Cable and so on\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t3.This Type F male push on to female coupler provides the ability to convert a standard Type F male interface to a push on Type F male. The interface style change is useful in many test applications where multiple couplings are needed. Use of the push on style allows quick push on mating without the need of time consuming threaded mating\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t4. Package include: 10 x F Type Push On Quick Connect Adapter as picture\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t5. Professional after-sales service - 2 Years Warranty - We do offer a 60-days money-back guarantee on all orders to allow you to test the product",
      images: [
        "https://images-na.ssl-images-amazon.com/images/I/61oh%2BNf-lKL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61x6iL-UHqL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51qV%2BFB6QOL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51rQZSnrg0L._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51bXMBphmTL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71PO9LihsAL._SL1001_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61xHszEqNvL._SL1001_.jpg"
      ]
    }
  }
];

const getTest = ({ file, expected }) => () => {
  const html = fs.readFileSync(__dirname + "/" + file);
  const $ = cheerio.load(html);
  const item = parser.parseItem($);
  assert.deepEqual(expected, item);
};

describe("parse amazon correctly", () => {
  it("case 1", () => {
    getTest(cases[0])();
  });

  it("case 2", () => {
    getTest(cases[1])();
  });

  it("case 3", () => {
    getTest(cases[2])();
  });

  it("case 4", () => {
    getTest(cases[3])();
  });
});
