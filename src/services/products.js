export function getProducts() {
  return fetch("http://localhost:3333/products").then((data) => data.json());
}

export function setProduct(product) {
  return fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product }),
  }).then((data) => data.json());
}
