/*global PublicGoogleSheetsParser*/
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Component, useState} from "react";
import {Button, Grid, Tooltip} from "@mui/material";

// import Contador from "./Contador";
// import AddIcon from "@material-ui/icons/Add";
// import AddIcon from '@mui/icons-material/Add';
// import Fab from "@material-ui/core/Fab";

class ListadoMaterias extends Component {
  constructor(props) {
    super(props);
    this.state = {
        materiasElegidas: [],
        totalHoras: function () {
            return this.materiasElegidas.reduce((total, current) => total + current.hours, 0)
        }
    };
     this.actualizarState = this.actualizarState.bind(this);
  }
  agregarSlotMateria = (idx) => {
    console.log("INIT agregarSlotMateria");
    this.setState({
      materiasElegidas: [
        ...this.state.materiasElegidas,
        {  title: null, hours: 0, professor: null , SIU_code: null }
      ],
    });
    console.log(this.state);
    console.log("END agregarSlotMateria");
  };

  actualizarState(idx, materia) {
      console.log(idx, materia);
      this.setState(prevState => ({
          materiasElegidas:  prevState.materiasElegidas.map((todo, index) =>
            index === idx ? materia : todo
          )
      }))

      // this.state.materiasElegidas.map(m => m.hours).reduce((prev, curr) => prev + curr, 0);
      console.log(this.state);
      // console.log(this.state.materiasElegidas.reduce((total, current) => total + parseInt(current.hours), 0));
  }



    render() {
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
                  this.state.materiasElegidas.map((todo, index) => {
                      return (
                        <Grid key={index} item xs={3}>
                            {/*<MateriaSearch idx={index} handle={this.actualizarState}/>*/}
                            <MateriaSearch2 idx={index} handle={this.actualizarState}/>
                        </Grid>
                      );
                  })}
                </Grid>

            <Tooltip title="Agregar una materia a la lista" placement="right-start">
                <Button variant="contained" onClick={() => this.agregarSlotMateria()}>Agregar materia</Button>
            </Tooltip>

            <p>Cantidad de horas: {this.state.totalHoras()}</p>

          </React.Fragment>
        );
  }
}

export default ListadoMaterias;

function esMateriaValida(value) {
    return materiasList.some(item => value === item);
}

const MateriaSearch2 = (props) => {
  const [valorEscrito, setValorEscrito] = useState("")
  const [materiasOptions, setMateriasOptions] = useState([])

  React.useEffect(() => {
    const spreadsheetId = '1__20B99GvL0rxSEXQrIufYeGTYpCz6ypOx7dBTRm3YA'
    const parser = new PublicGoogleSheetsParser()
    parser.parse(spreadsheetId).then(materias => setMateriasOptions(materias))
  }, [])

  return (
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                // options={materiasList.map((option) => option.title + " (" + option.hours + " horas)")}
                options={materiasOptions}
                // getOptionLabel={option => option.title + " (" + option.hours + " horas)"}
                getOptionLabel={option => JSON.stringify(option)}
                style={{
                    width: 500,
                    padding: "10px",
                    align: "center"
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={"Materia " + (props.idx + 1) + "..."}
                        error={!!valorEscrito && !esMateriaValida(valorEscrito)}
                        helperText={!esMateriaValida(valorEscrito) && "Esta no es una materia valida" }
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                onChange={(e, value) => {
                    setValorEscrito(value)
                  console.log('value', esMateriaValida(value) ? value : null);
                  if(esMateriaValida(value)) props.handle(props.idx,  value);
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
