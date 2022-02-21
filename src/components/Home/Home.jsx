// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Col, Container, Row, Spinner } from "react-bootstrap";
// import LoadingCard from "../shared/LoadingCard";

import { FaReact } from "react-icons/fa";

function Home() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   const data = await axios.get("https://fakestoreapi.com/products");
  //   this.setProducts(data);
  // };
  return (
    <>
      <h3 className="display-5 text-center mt-md-5">
        Welcom React App <FaReact />
      </h3>
      {/* <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {this.products ? (
            this.products &&
            this.products.map((p) => {
              <Col>{p.title}</Col>;
            })
          ) : (
            <>
              <Col>
                <LoadingCard />
              </Col>
              <Col>
                <LoadingCard />
              </Col>
              <Col>
                <LoadingCard />
              </Col>
              <Col>
                <LoadingCard />
              </Col>
            </>
          )}

          {console.log(this.products)}
        </Row>
      </Container> */}
    </>
  );
}

export default Home;
