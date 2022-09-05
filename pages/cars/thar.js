import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { Button, Card, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index(props) {
    return(
    <div>
       <CardGroup>
      <Card>
        <Card.Img variant="top" src="/dummy.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/dummy.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/dummy.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
 </div>
    )
  }