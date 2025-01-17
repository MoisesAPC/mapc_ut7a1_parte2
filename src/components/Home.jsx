import Dashboard from "./Dashboard"
import { Typography } from "@mui/material"
import CardAnimal from '/src/components/CardAnimal.jsx';

function Home() {
    const perros = [
        {
          id: 1,
          nombre: "Caniche",
          alt: "Un pequeño perro de raza caniche",
          imagen: 'src/assets/perros/caniche.jpg'
        }
      ];

    // Prueba: Obtenemos las variables del primer elemento del array
    const { nombre, alt, imagen } = perros[0];

    return <>
        <Dashboard/>
        <Typography variant="h2">Inicio</Typography>
        <CardAnimal nombre={nombre} imagen={imagen} alt={alt} />
    </>
}

export default Home
