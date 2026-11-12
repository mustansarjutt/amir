function sayHello(req, res) {
  return res.json({
    message: "Hello user",
  });
}

function getProduct(req, res) {
  return res.json({
    id: 1,
    name: "Handfree",
    price: 500
  });
}

export {
  sayHello,
  getProduct,
};
