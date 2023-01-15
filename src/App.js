import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CardComponent from "./CardComponent";
function App() {

  const [products, setProducts] = useState(
    [{
      "id": 1, "color": "navy", "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549,
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    },
    {
      "id": 2, "color": "maroon", "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with", "price": 899,
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      "id": 3, "color": "red", "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 280,
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    },
    {
      "id": 4, color: "purple", "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099,
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    },
    {
      "id": 5, "color": "green", "title": "Huawei P30", "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", "price": 499,
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    },
    {
      "id": 6, "color": "fuchsia", "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 1749,
      "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    },
    {
      "id": 7, "color": "olive", "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 1499,
      "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    },
    {
      "id": 8, color: "teal", "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 1499,
      "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    },
    {
      "id": 9, "color": "black", "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249,
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    }
    ]
  )


  return (
    <Container className="my-5">
      <Row>
        {
          products.map((data, index) => (
            <Col md="6" lg="4" key={index}>
              <CardComponent product={data} />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default App;
