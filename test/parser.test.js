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
      price: {
        unit: "$",
        price: 7.99
      },
      dealPrice: {},
      additionalDescription:
        "RedTaro Chic Print Designs for Fitbit Charge 2 Bands RedTaro designs chic bands for Fitbit Charge 2. Flower Collection - Fitbit Charge 2 Bands To be honest, the paisley design fitbit charge 2 bands is a surprise maybe from God. LOL. We got it by chance and we made them with less expectation...but it becomes our top popular design. What a big surprise! How do you think of the popular band on fitbit charge 2? Paisley Design - Fitbit Charge 2 Accessory Bands I'm extremely crazy about floral things, eg. flower dresses, shoes, cups, beds sheets, bags etc. We design many floral fitbit charge 2 bands and would love to share them for you! Pink floral, blue floral, lotus, black floral etc. When you're in floral dress, would you like to get one floral fitbit charge 2 band to match the dress? Other Collection - Fitbit Charge 2 Replacement Bands Small Large Animal Collection - Fitbit Charge 2 Replacement Bands Small Large The animal collection are we designs for pet lovers. Now it's available for animal paw print, owl, cheetah/leopard print, skull, etc. We'll design some new bands from time to time and please keep an eye on RedTaro Fitbit Charge 2 bands. Fairy Design - Fitbit Charge 2 Bracelets We designed the fairy fitbit charge 2 bands for our loved courtyard and gardening. We spent tons of happy time here, playing with little kids, holding friends parties, enjoying family dinners, doing gardening work etc. The black background means the yard soil, the butterflies or unnamed insects are flying around the beautiful flowers. It's a pretty one, would you love to get one for your fitbit charge 2? Splash-ink Design - Fitbit Charge 2 Straps The splash-ink fitbit charge 2 bands are designed for the persons who got a hobby of painting. The source of design inspiration comes from Chinese ink-painting technique. The painters sprinkle lots of black ink on the white drawing paper and then a painting comes into our eyes. Amazing and unbelievable! We changed the black ink into colorful one, so it becomes a colorful band. Please note that it's made in uncontrolled painting so it's irregular and probably you will get one little different from the picture showed. The design fitbit charge 2 bands are available in two sizes.The small bands fit for 5.5\"-6.7\"wrists and large bands for 6.7\"-8.1\" bands. That's all! Thank you!",
      description:
        'Designed Replacement Wrist Bands for Fitbit Charge 2, not for Fitbit Charge, Charge HR or other Fitbit models Free size to slide with buckle: Small ( 5.5"-6.7" ), Large ( 6.7"-8.1" ) Variety of Colors: animal print,gray swirls,lotus, floral etc. More colors and designs will come soon; High Quality Material - interchangeable accessory bands for Fitbit Charge 2 is made of flexible and durable elastomer material with surgical-grade stainless steel buckle Guarantee - Bands for Fitbit Charge 2 come with 30-day money back guarantee and quick great service.',
      images: [
        "https://images-na.ssl-images-amazon.com/images/I/51XckwFlUuL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51eOUPezusL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51MNiiFf7DL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51K2P-txr8L._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/41ADpJKiT3L._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/416UIwc371L._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/615eYhHd5IL._SS40_.jpg"
      ],
      size: {},
      weight: {},
      brand: "RedTaro",
      UPC: undefined
    }
  },
  {
    file: "case2.html",
    expected: {
      title:
        "SaferCCTV (Pack of 10) F Type Push On Quick Coax Connectors Adapter for RVers Satellite Dish Cable TV Internet RV Trailer Coax Cable - 2 Years Warranty",
      price: {
        unit: "$",
        price: 8.65
      },
      dealPrice: {},
      additionalDescription: "",
      description:
        "1. Use this to make your cable easily connect and disconnect 2. Work with all Antenna, Satellite, and Cable TV. Fits for RVers,Satellite Dish,Cable TV,Internet,RV Trailer Coax Cable and so on 3.This Type F male push on to female coupler provides the ability to convert a standard Type F male interface to a push on Type F male. The interface style change is useful in many test applications where multiple couplings are needed. Use of the push on style allows quick push on mating without the need of time consuming threaded mating 4. Package include: 10 x F Type Push On Quick Connect Adapter as picture 5. Professional after-sales service - 2 Years Warranty - We do offer a 60-days money-back guarantee on all orders to allow you to test the product",
      images: [
        "https://images-na.ssl-images-amazon.com/images/I/51hSxzzZTFL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/418z9Kbyk6L._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/41HyjUTjCfL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/31bIJIm36BL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/31rrZgciaHL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51W%2BSK2tJYL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/4109Wyr37sL._SS40_.jpg"
      ],
      size: { length: 4.6, width: 3, height: 0.4, unit: "inches" },
      weight: { weight: 1.6, unit: "ounces" },
      brand: "SaferCCTV",
      UPC: undefined
    }
  },
  {
    file: "case3.html",
    expected: {
      title:
        "Kent - The Handmade Comb - Coarse and Fine Toothed Comb Sawcut 9T, Large, 192 mm",
      price: {
        unit: "$",
        price: 14.0
      },
      dealPrice: {},
      additionalDescription: "",
      description:
        "Item condition: 100% authentic, new and unused, Kent the handmade comb - 192 mm large coarse and fine toothed comb saw cut 9t Kent handmade comb 9t - 192 mm large coarse and fine toothed comb. Type: Combs More",
      images: [
        "https://images-na.ssl-images-amazon.com/images/I/41iVWor0cqL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/31LL5s6ls%2BL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/41%2BWxNGRxPL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/31VNVoWHsPL._SS40_.jpg"
      ],
      size: { length: 7.1, width: 7, height: 1.6, unit: "inches" },
      weight: { weight: 0.8, unit: "ounces" },
      brand: "Kent",
      UPC: "885176827251"
    }
  },
  {
    file: "case4.html",
    expected: {
      title: "SNUGGER 12v Diesel Air Heater 2KW (Heater Unit Only)",
      price: {},
      dealPrice: {},
      additionalDescription: "",
      description:
        "This fits your . Make sure this fits by entering your model number. BTU output 7850 Power Consumption 34 Watts on High Speed Air Flow-CFM 49 Analog Controller (INCLUDED) › See more product details",
      images: [
        "https://images-na.ssl-images-amazon.com/images/I/31E2BJ73h3L._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51Dfo2BlNsL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/41XL-EKYMsL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51EqEMY2TlL._SS40_.jpg"
      ],
      size: { length: 12, width: 5, height: 5, unit: "in" },
      weight: { weight: 6, unit: "pounds" },
      brand: "Snugger",
      UPC: undefined
    }
  },
  {
    file: "case5.html",
    expected: {
      title: "Black & Decker BDCDD12C 12V MAX Lithium Drill",
      price: {
        unit: "$",
        price: 29.99
      },
      dealPrice: {},
      additionalDescription: "",
      description:
        "12V MAX Lithium Ion Battery - Always ready, holds a charge up to 18 months Soft grip handle for comfort and variable speed trigger for control Compact size for tight spaces Integrated LED work light More",
      images: [
        "https://images-na.ssl-images-amazon.com/images/I/41PTdwOUkGL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/41gE0sLSngL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51D58VwUAlL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51G%2BHFhPFDL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51w0oD3pomL._SS40_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/41qy2xnchIL._SS40_.jpg"
      ],
      size: { length: 9.4, width: 2.8, height: 8.1, unit: "inches" },
      weight: { weight: 2.5, unit: "pounds" },
      brand: "BLACK+DECKER",
      UPC: 885911466127
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

  it("case 5", () => {
    getTest(cases[4])();
  });
});
