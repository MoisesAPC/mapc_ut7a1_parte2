import React from 'react';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import CardAnimal from '/src/components/CardAnimal.jsx';
import Dashboard from '/src/components/Dashboard.jsx';

// El argumento "animales" se corresponde con el array que contiene la lista de los animales
// a mostrar en el CardAnimal
function ListaAnimales({ animales }) {
  return (
    <>
        <Container maxWidth="lg">
            {/* Cada fila tendrá 3 CardAnimal, por lo que ponemos spacing = 3 */}
            <Grid container spacing={3} justifyContent="center">
            {animales.map((animal) => (
                <Grid item xs={12} sm={6} md={4} key={animal.id}>
                    <CardAnimal {...animal} tamano={300} />
                </Grid>
            ))}
            </Grid>
        </Container>
    </>
  );
}

export default ListaAnimales
