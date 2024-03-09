
import Card from 'react-bootstrap/Card';
import Tags from './Tags';


export const MyCard =({image,nombre,descripcion,color,propietario})=>{

    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Tags color={color} propietario={propietario}/>
      </Card.Body>
    </Card>
  );
}






