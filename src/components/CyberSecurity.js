import CardTemplate from "./CardTemplate";
import { Container, Row, Col } from "react-bootstrap";



export default function CyberSecuriy() {
    const courses = [
        {
          title:
            " Non-Coding Jobs in Cybersecurity: A Comprehensive Guide    ",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
          author: "Jaishree Tomar",
        },
        {
          title:
            " Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
          img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
          author: "Tushar Vinocha",
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