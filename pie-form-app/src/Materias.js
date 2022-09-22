import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Component} from "react";
import {Button, Grid, Tooltip} from "@mui/material";

import Contador from "./Contador";
// import AddIcon from "@material-ui/icons/Add";
// import AddIcon from '@mui/icons-material/Add';
// import Fab from "@material-ui/core/Fab";

class ListadoMaterias extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        materiasRow: [],
        contadorHoras: 0
    };
     this.actualizarState = this.actualizarState.bind(this);
  }
  agregarSlotMateria = (idx) => {
    console.log("INIT agregarSlotMateria");
    this.setState({
      materiasRow: [
        ...this.state.materiasRow,
        { materiaData: { title: null, hours: 0, professor: null , SIU_code: null}, }
      ]
    });
    console.log(this.state);
    console.log("END agregarSlotMateria");
  };

  actualizarState(idx, materia) {
      console.log(idx, materia);
      this.setState(prevState => ({
          materiasRow: prevState.materiasRow.map((todo, index) =>
            index === idx ? {  materiaData: materia }: todo
          )
      }))
      this.setState(prevState => ({
          contadorHoras: (this.state.materiasRow.reduce((total, current) => total + current.hours, 0))
      }))

      // this.state.materiasRow.map(m => m.hours).reduce((prev, curr) => prev + curr, 0);
      console.log(this.state);
      // console.log(this.state.materiasRow.reduce((total, current) => total + parseInt(current.hours), 0));
  }



    render() {
        let total = (this.state.materiasRow.reduce((total, current) => total = [total, current.hours ? current.hours : -1], []));
        return (
          <React.Fragment>
              <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  // style={{ minHeight: '100vh' }}
                >
                {
                  this.state.materiasRow.map((todo, index) => {
                      return (
                        <Grid item xs={3} handleClick={this.actualizarState}>
                            {/*<MateriaSearch idx={index} handle={this.actualizarState}/>*/}
                            <MateriaSearch2 idx={index} handle={this.actualizarState}/>
                        </Grid>
                      );
                  })}
                </Grid>

            <Tooltip title="Agregar una materia a la lista" placement="right-start">
                <Button variant="contained" onClick={() => this.agregarSlotMateria()}>Agregar materia</Button>
            </Tooltip>

            <p>Cantidad de horas: {total} <Contador /></p>

          </React.Fragment>
        );
  }
}

export default ListadoMaterias;

function handleCheck(value) {
    return materiasList.some(item => value === item);
}

const MateriaSearch2 = (props) => {
    return (
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                // options={materiasList.map((option) => option.title + " (" + option.hours + " horas)")}
                options={materiasList}
                getOptionLabel={option => option.title + " (" + option.hours + " horas)"}
                style={{
                    width: 500,
                    padding: "10px",
                    align: "center"
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={"Materia " + (props.idx + 1) + "..."}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                onChange={(e: object, value: any | null) => {
                  console.log('value', handleCheck(value) ? value : null);
                  props.handle(props.idx, handleCheck(value) ? value : null);
                  console.log(props);
                  // this.cambiarMateria(value.hours)
                  // setFieldValue("address.country", value);
                }}
            />
        )
};
// class MateriaSearch extends Component {
//     constructor(props) {
//         super(props)
//         // this.state = { horas: 0, idx: this.props.idx };
//         this.idx = this.props.idx;
//         this.handle = this.props.handle;
//     }
//
//     render () {
//         return (
//             <Autocomplete
//                 freeSolo
//                 id="free-solo-2-demo"
//                 disableClearable
//                 // options={materiasList.map((option) => option.title + " (" + option.hours + " horas)")}
//                 options={materiasList}
//                 getOptionLabel={option => option.title + " (" + option.hours + " horas)"}
//                 style={{
//                     width: 500,
//                     padding: "10px",
//                     align: "center"
//                 }}
//                 renderInput={(params) => (
//                     <TextField
//                         {...params}
//                         label={"Buscar materia " + (this.props.idx + 1) + "..."}
//                         InputProps={{
//                             ...params.InputProps,
//                             type: 'search',
//                         }}
//                     />
//                 )}
//                 onChange={(e: object, value: any | null) => {
//                   console.log('value', handleCheck(value) ? value : null);
//                   this.handle(this.idx, handleCheck(value) ? value : null);
//                   // console.log("                  ");
//                   // this.cambiarMateria(value.hours)
//                   // setFieldValue("address.country", value);
//                 }}
//             />
//         )
//     }
//
//
// }


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const materiasList = [
  { title: 'Algoritmos y estructuras de datos avanzadas', hours: 96, professor: "Min Lin" , SIU_code: "LCD_001"},
  { title: 'Azar, Algoritmos y Autómatas', hours: 48, professor: "Verónica Becher", SIU_code: "LCD_002" },
  { title: 'Conceptos Basicos de Inteligencia Computacional', hours: 64, professor: "María Vanina Martinez", SIU_code: "LCD_003"  },
];
