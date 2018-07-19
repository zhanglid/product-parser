const Crawler = require("crawler");
const _ = require("lodash");
const parseItem = require("./lib/parser").parseItem;
const c = new Crawler({});

const getCallback = (resolve, reject) =>
  function(error, res, done) {
    if (error) {
      reject(error);
    } else {
      const item = parseItem(res.$);

      resolve(item);
    }
    done();
  };

exports.parse = uri => {
  return new Promise((resolve, reject) => {
    const callback = getCallback(resolve, reject);
    c.queue({ uri, callback });
  });
};
