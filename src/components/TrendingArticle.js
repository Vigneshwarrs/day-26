import { Col, Container, Row } from "react-bootstrap";
import CardTemplate from "./CardTemplate";

export default function TrendingArticle() {
  const courses = [
    {
      title:
        "40 Java Interview Questions for Freshers with Clear & Concise Answers",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/03/java.jpeg",
      author: "Tushar Vinocha",
    },
    {
      title:
        "How to Render an Array of Objects in React? [in 3 easy steps]",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs.png",
      author: "Tarun Singh",
    },
    {
      title:
        "Top 30 Mini Project Ideas For College Students [UPDATED]",
      img: "	https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-768x402.png",
      author: "Srinithi Sankar",
    },
    {
      title:
        "Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      author: "Tarun Singh",
    },
    {
      title:
        "30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/02/animated-javascript-project-image.jpg",
      author: "Saakshi Priyadharshini",
    },
    {
      title:
        " Top 10 Unique Project Ideas for College Students",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg",
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
