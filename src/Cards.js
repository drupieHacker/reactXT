import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from './images/n1.jpg';
import image2 from './images/n2.jpg';
import image3 from './images/n3.jpg';
function Cards(props){
    return (
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Misión</Card.Title>
              <Card.Text>
              Ser la empresa de consultoría y capacitación líder en la República Mexicana.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Visión</Card.Title>
              <Card.Text>
              Tener una participación activa y reformar la educación en México al modelo por competencias dando la oportunidad de creación de empleo y aumentar el nivel académico del país con estructura, gestión del saber, del saber ser y deber ser. Siendo expertos en procesos empresariales de gestión y arquitectura.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Valores</Card.Title>
              <Card.Text>
              Posicionarnos en el mercado Mexicano de la capacitación por competencias y gestión de TI.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </CardGroup>
      )
}
export default Cards;