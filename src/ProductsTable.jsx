import { useEffect, useState } from "react";
// import axios from "axios";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch products"); // Throw error for non-2xx status codes
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message); // Set the error message
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock Quantity</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.ProductName}</td>
            <td>{product.Description}</td>
            <td>${product.Price}</td>
            <td>{product.StockQuantity}</td>
            <td>{product.CategoryName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
