import {Card} from 'react-bootstrap';

export default function CardTemplate({data}) {
  return (
    <Card className='m-2'>
      <Card.Img variant="top" style={{height:'150px'}} src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>By {data.author}</Card.Text>
      </Card.Body>
    </Card>
  );
}
