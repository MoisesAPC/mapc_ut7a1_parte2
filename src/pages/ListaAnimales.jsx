import React from 'react';
import { Container } from '@mui/material';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Testimonio from './components/Testimonio';

function ListaAnimales() {
    const animales = [
        {
            id: 1,
            nombre: "Perro",
            alt: "Un perro",
            imagen: 'src/assets/perros/caniche.jpg'
        }
    ];

    const perros = [
        {
          id: 1,
          nombre: "Caniche",
          alt: "Un pequeño perro de raza caniche",
          imagen: 'src/assets/perros/caniche.jpg'
        }
      ];

  return (
    <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
        {animales.map((animal) => (
            <Grid item xs={12} sm={6} md={4} key={animal.id}>
            <CardAnimal {...animal} />
            </Grid>
        ))}
        </Grid>
    </Container>
  );
}

export default ListaAnimales
