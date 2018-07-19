const _ = require("lodash");

const itemPaths = {
  title: "#productTitle",
  price: "#priceblock_ourprice",
  dealPrice: "#priceblock_dealprice",
  additionalDescription: {
    path: "h2:contains('Product Description')",
    parser: ele =>
      ele
        .next()
        .text()
        .trim()
        .replace(/[\s\t\n]+/g, " ")
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
      if (!text) {
        return [];
      }
      const matches = text.match(urlExp);

      if (_.isEmpty(matches)) {
        return [];
      }
      const images = matches.map(sub => {
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
          weight: parseFloat(data[1]),
          unit: data[2]
        };
      } else {
        return {};
      }
    }
  },
  brand: {
    path: "a#bylineInfo",
    parser: ele => ele.text().trim()
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
        .first()
        .text()
        .trim();
    }

    const { path, regExp, parser = ele => ele.text() } = target;

    return parser(regExp ? _.get(regExp.exec($.html()), "[0]") : $(path));
  });

  return item;
};
