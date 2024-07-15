import CardTemplate from "./CardTemplate";
import { Container, Row, Col } from "react-bootstrap";


export default function FullStack() {
    const courses = [
        {
          title:
            "Best Full-Stack Development Project Ideas in 2024  ",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
          author: "Isha Sharma",
        },
        {
          title:
            "How Long Would It Take to Be a Full Stack Developer?",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
          author: "Meghana D",
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