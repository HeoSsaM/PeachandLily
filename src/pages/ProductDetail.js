import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(product)
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/HeoSsaM/PeachandLily/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container className='product_detail'>
      <Row className="product-detail">
        <Col className="productDetail-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col className='productDetail-info'>
          <div className="new">{product?.new === true ? "NEW PRODUCT" : ""}</div>
          <div className="title">{product?.title}</div>
          <div className="sub_title">{product?.subTitle}</div>
          <div className="content">{product?.content}</div>
          <div className="price">＄{product?.price}</div>
          <div className="option">
            {
              product?.option.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))
            }
          </div>
          <Button variant="dark">주문하기</Button>
        </Col>
      </Row>
    </Container>
  )
}
