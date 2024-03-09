import Badge from 'react-bootstrap/Badge';

const Tags=({color,propietario})=>{
 
    return(
            <div>
                 <Badge bg={color}>{propietario}</Badge>
            </div>
          );
        }
        
      

export default Tags;
