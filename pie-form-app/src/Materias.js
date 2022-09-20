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
        customRow: [],
        contadorHoras: 0
    };
  }
  agregarSlotMateria = () => {
    this.setState({
      customRow: [
        ...this.state.customRow,
        { materiaData: null }
      ]
    });
    console.log(this.state);
  };

  cambiarMateria(idx, materia) {
       console.log([idx, materia]);
  }


    render() {
    // const { classes } = this.props;

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
              this.state.customRow.map((todo, index) => {
                  return (
                    <Grid item xs={3}>
                        <MateriaSearch idx={index} handle={this.cambiarMateria}/>
                    </Grid>
                  );
              })}
            </Grid>

        <Tooltip title="Agregar una materia a la lista" placement="right-start">
            <Button variant="contained" onClick={() => this.agregarSlotMateria()}>Agregar materia</Button>
        </Tooltip>

        <p>Cantidad de horas: <Contador /></p>

      </React.Fragment>
    );
  }
}

export default ListadoMaterias;

class MateriaSearch extends Component {
    constructor(props) {
        super(props)
        this.state = { horas: 0, idx: this.props.idx }
        this.handle = this.props.handle;
    }


    handleTextFieldChange (e){
        this.setState({
            textFieldValue: e.target.value
        });
    }

    cambiarMateria(n) {
        this.setState({horas: n || 0});
        console.log(this.state)

    }

    render () {
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
                        label={"Buscar materia " + (this.props.idx + 1) + "..."}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                onChange={(e: object, value: any | null) => {
                  console.log('value', value );
                  console.log("                  ");
                  this.cambiarMateria(value.hours)
                  // setFieldValue("address.country", value);
                }}
            />
        )
    }
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const materiasList = [
  { title: 'Algoritmos y estructuras de datos avanzadas', hours: 96, professor: "Min Lin" , SIU_code: "LCD_001"},
  { title: 'Azar, Algoritmos y Autómatas', hours: 48, professor: "Verónica Becher", SIU_code: "LCD_002" },
  { title: 'Conceptos Basicos de Inteligencia Computacional', hours: 64, professor: "María Vanina Martinez", SIU_code: "LCD_003"  },
];
