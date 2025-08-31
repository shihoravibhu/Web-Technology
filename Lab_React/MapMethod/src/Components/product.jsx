// 4. Display Products stored in array using ReactJS (C)



function Products() {
  const product = [
    {
      pname: "Laptop",
      price: "$1000",
      Image: "https://example.com/laptop.jpg",
    },
    {
      pname: "Smartphone",
      price: "$700",
      Image: "https://example.com/smartphone.jpg",
    },
    {
      pname: "Tablet",
      price: "$500",
      Image: "https://example.com/tablet.jpg",
    },
    {
      pname: "Smartwatch",
      price: "$300",
      Image: "https://example.com/smartwatch.jpg",
    },
    {
      pname: "Headphones",
      price: "$150",
      Image: "https://example.com/headphones.jpg",
    },
  ];

  return (
    <div style={{ display: "flex",  margin: "20px" }}>
      {product.map((pro) => {
        return (<div className="card" style={{ width: "18rem" }} >
          <img src={pro.Image} className="card-img-top" alt={pro.pname} />
          <div className="card-body">
            <h4 className="card-title">{pro.pname}</h4>
            <h6 className="card-title">{pro.price}</h6>
            <a href="#" className="btn btn-dark">
              Buy
            </a>
          </div>
        </div>)
})}
    </div>
  );
}

export default Products;
