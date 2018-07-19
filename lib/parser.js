const _ = require("lodash");

const itemPaths = {
  title: "#productTitle",
  price: "#priceblock_ourprice",
  additionalDescription: {
    path: "h2:contains('Product Description')",
    parser: ele =>
      ele
        .next()
        .text()
        .trim()
  },
  description: {
    path: "#feature-bullets",
    parser: ele =>
      ele
        .text()
        .trim()
        .replace(/[\s\t\n]+/g, " ")
  },
  images: {
    regExp: /var data = {\n.+/,
    parser: text => {
      const urlExp = /"thumb"\:"([^"]+)"/g;
      const images = text.match(urlExp).map(sub => {
        return /"thumb"\:"([^"]+)"/.exec(sub)[1];
      });
      return images;
    }
  },
  size: {
    path: "body",
    parser: $ => {
      const data = /Dimensions:* ([\d\.]+)\s+x\s+([\d\.]+)\s+x\s+([\d\.]+)\s+(\w+)/.exec(
        $
          .text()
          .trim()
          .replace(/[\s\t\n]+/g, " ")
      );
      if (data && data[4] !== undefined) {
        return {
          length: parseFloat(data[1]),
          width: parseFloat(data[2]),
          height: parseFloat(data[3]),
          unit: data[4]
        };
      }
      return {};
    }
  },
  weight: {
    path: "body",
    parser: $ => {
      const data = /Weight:* ([\d\.]+)\s+(\w+)/.exec(
        $
          .text()
          .trim()
          .replace(/[\s\t\n]+/g, " ")
      );
      if (data && data[2]) {
        return {
          weight: data[1],
          unit: data[2]
        };
      } else {
        return {};
      }
    }
  },
  brand: {
    path: "a#bylineInfo",
    parser: ele =>
      ele
        .text()
        .trim()
  },
  UPC: {
    path: "body",
    parser: $ => {
      const data = /UPC:* ([\d\.]+)/.exec(
        $
          .text()
          .trim()
          .replace(/[\s\t\n]+/g, " ")
      );

      if (!data || data[1] === undefined) {
        return undefined;
      }
      return parseFloat(data[1]);
    }
  }
};

exports.parseItem = $ => {
  const item = _.mapValues(itemPaths, target => {
    if (typeof target === "string") {
      return $(target)
        .text()
        .trim();
    }

    const { path, regExp, parser = ele => ele.text() } = target;

    return parser(regExp ? regExp.exec($.html())[0] : $(path));
  });

  return item;
};
