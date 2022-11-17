import Accordion from 'react-bootstrap/Accordion';
function Branding(props){
    return (
        <>
        <h1 className='text-center'>Nosotros</h1>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Introducción</Accordion.Header>
            <Accordion.Body>
            Xt-Negocio se fundó en el 2010, por el Dr. José Manuel Díaz Campuzano, con el fin de convertirse en la empresa consultora en tecnologías de la información, más grande del país.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Más de nosotros</Accordion.Header>
            <Accordion.Body>
            Actualmente se conforma por 67 empleados que laboran en CDMX, Tepic 139, Oficina 601, Roma Sur Alcaldía Cuauhtémoc, C.P. 06760. Ven y conócenos.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </>
        
      );
}
export default Branding;