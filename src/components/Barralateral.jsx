import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Barralateral() {
    //aqui se declara el estado showA y la funcion que va a actualizarlo
    const [showA, setShowA] = useState(true);
   //declara funcion que hace que cuando se llama a showA se cambie el estado, es decir altera el valor
    const toggleShowA = () => setShowA(!showA);
  
    return (
        <Row className='m-0 p-1'>
            <Col md={12} className="mb-2">
                <Button onClick={toggleShowA} className="mb-2">
  {/* este boton con a propiedad onclick lo que hace es que cuando cerramos el anuncio, desaparezcan */}
             <strong>Mostrar anuncios</strong>
                </Button>
                <Toast onClose={toggleShowA} show={showA} animation={false}>
                <Toast.Header>
                    <img
                    src="https://perfugroupar.vtexassets.com/arquivos/ids/189453-800-auto?v=638225372480600000&width=800&height=auto&aspect=true"
                    className="rounded me-2 img-fluid"
                    alt=""
                    />
                </Toast.Header>
                <Toast.Body>ESTE ES UN NUEVO SHAMPOO DE LOREAL</Toast.Body>
                </Toast>

                <Toast onClose={toggleShowA} show={showA} animation={false}>
                <Toast.Header>
                    <img
                    src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
                    className="rounded me-2 img-fluid"
                    alt=""
                    />
                </Toast.Header>
                <Toast.Body>ESTE ES UN NUEVO SHAMPOO DE LOREAL</Toast.Body>
                </Toast>

                <Toast onClose={toggleShowA} show={showA} animation={false}>
                <Toast.Header>
                    <img
                    src="https://perfugroupar.vtexassets.com/arquivos/ids/189453-800-auto?v=638225372480600000&width=800&height=auto&aspect=true"
                    className="rounded me-2 img-fluid"
                    alt=""
                    />
                </Toast.Header>
                <Toast.Body>ESTE ES UN NUEVO SHAMPOO DE LOREAL</Toast.Body>
                </Toast>
            </Col>
      </Row>
  );
}

export default Barralateral;