import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

export const ProductAll = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  //json-server에 있는 db.json 데이터를 요청 -> api 요청
  const getProducts = async () => {
    try {
      let searchQuery = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/HeoSsaM/peachandlily/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      if (data.length < 1) {
        if (searchQuery !== "") {
          setError(`${searchQuery}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("결과가 없습니다");
        }
      }
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row className="product_list">
        {products.map((item, index) => (
          <Col key={index} lg={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
