import CardTemplate from "./CardTemplate";
import { Container, Row, Col } from "react-bootstrap";

export default function DigitalMarketing() {
    const courses = [
        {
          title:
            " 10 Outstanding Marketing Management Case Studies from India",
          img: "https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-Outstanding-Marketing-Management-Case-Studies-from-India.webp",
          author: "Shaanshi Bhardwaj",
        },
        {
          title:
            " 6 Reasons Business Analytics Makes Digital Marketing Powerfull ",
          img: "https://www.guvi.in/blog/wp-content/uploads/2022/10/31958-2048x878.jpg",
          author: "Lahari Chandana",
        }
      ];
    
      return (
        <div>
          <Container className="p-3">
            <Row>
              {courses.map((course) => (
                <Col lg={3} md={4} className="d-flex flex-wrap">
                  <CardTemplate data={course} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );
}