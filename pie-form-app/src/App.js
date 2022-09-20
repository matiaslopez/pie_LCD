import './App.css';
import React, { Component } from 'react'

// import usePagination from '@mui/material/usePagination';
// import {Box, Tab, Tabs} from "@mui/material";
// import { TabPanel } from '@mui/lab';
// import MateriasSearch from "./Materias";
import TextField from "@mui/material/TextField";
import ListadoMaterias from "./Materias";
import {Accordion, AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class App extends Component {
 render() {
   return (
     <div className="App">
        <Container maxWidth="sm">
          <Encabezado />

              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Datos estudiante</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DatosEstudiante />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Datos Tutor/a</Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Datos Materias</Typography>
        </AccordionSummary>
          <AccordionDetails>
              <ListadoMaterias />
          </AccordionDetails>
      </Accordion>
        </Container>
     </div>
   )
 }
}

class DatosEstudiante extends Component {
 render() {
   return <div>
       <TextField required  id="outlined-required" label="Nombre"  />
            <TextField required  id="outlined-required" label="Apellido"  />
            <TextField required  id="outlined-required" label="Libreta universitaria"  />
            <TextField required  id="outlined-required" label="Email"  />
   </div>
 }
}

class Encabezado extends Component {
 render() {
   return (<div className="App-intro">
     <h2>Plan de Estudios Individual PEI</h2>
     <p>Plan de materias a cursar en el Tercer Ciclo de la carrera.
         Las materias de este plan de estudios individual pueden surgir de las que proponen los cuatro
         departamentos/instituto a cargo de la carrera, de otros departamentos o incluso también
         de otras facultades. Este plan debe estar previamente acordado con tu tutor/a.</p>
     <p>Una vez enviado el formulario lo recibirás también en tu correo electrónico.
         Recordá reenviar ese correo a tu tutor/a, quien a su vez deberá reenviarlo a
         tutorias.lcd@gmail.com como forma de manifestación de conformidad con la propuesta.</p></div>
       )
 }
}


// class Saludo extends Component {
//  render() {
//    return <h2>Hola, {this.props.nombre}</h2>
//  }
// }




export default App;


