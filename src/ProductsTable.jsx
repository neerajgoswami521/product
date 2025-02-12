import { useEffect, useState } from "react";
// import axios from "axios";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsData = [
    {
      productName: "Laptop",
      description: "High performance laptop",
      price: 1200.99,
      stockQuantity: 10,
      categoryId: 1,
      createdAt: "2024-02-12T10:00:00Z",
      updatedAt: "2024-02-12T12:00:00Z"
    },
    {
      productName: "Chair",
      description: "Comfortable office chair",
      price: 150.50,
      stockQuantity: 20,
      categoryId: 2,
      createdAt: "2024-02-11T09:30:00Z",
      updatedAt: "2024-02-11T11:00:00Z"
    }
  ];
  
  const categories = [
    {
      categoryName: "Electronics",
      description: "Devices and gadgets",
      isActive: true,
      createdAt: "2024-02-10T08:00:00Z",
      updatedAt: "2024-02-12T10:00:00Z"
    },
    {
      categoryName: "Furniture",
      description: "Home and office furniture",
      isActive: true,
      createdAt: "2024-02-09T07:30:00Z",
      updatedAt: "2024-02-11T09:00:00Z"
    }
  ];

  // useEffect(() => {
  //   axios.get("/products")
  //     .then(response => {
  //       setProducts(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       setError("Failed to fetch products");
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock Quantity</th>
          {/* <th>Category</th> */}
        </tr>
      </thead>
      <tbody>
        {productsData.map(product => (
          <tr key={product.id}>
            <td>{product.productName}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>{product.stockQuantity}</td>
            {/* <td>{product.category}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
