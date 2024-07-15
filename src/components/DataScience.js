import CardTemplate from "./CardTemplate";
import { Container, Row, Col } from "react-bootstrap";

export default function DataScience() {
    const courses = [
        {
          title:
            "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
          author: "Isha Sharma",
        },
        {
          title:
            "12 Real-World Data Science Examples: Power Of Data Science ",
          img: "	https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
          author: "Lukesh S",
        },
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