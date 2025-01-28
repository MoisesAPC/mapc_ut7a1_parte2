import React, { useState, useEffect } from 'react';
import { Button, Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Box, List, ListItem, Collapse } from '@mui/material';

const CardAnimalDetalles = ({ nombre, alt, imagen, tamano, informacion, pelaje, caracter, abrirInformacion }) => {

  const [openInformacion, setOpenInformacion] = useState(false)

  // Cuando la variable "abrirInformacion" esté a true
  // abrimos el collapse de "Informacion"
  useEffect(() => {
    if (abrirInformacion) {
      setOpenInformacion(true);
    }
  }, [abrirInformacion]);

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ width: tamano, maxWidth: 1000 }}>
        <CardContent>
          <CardMedia
            component="img"
            image={imagen}
            alt={alt}
            title={alt}
            sx={{
              width: tamano + 250,
              height: tamano,
              marginBottom: '16px',
              objectFit: 'cover'
            }}
          />

          <Typography variant="h6" component="div" align="center" fontWeight="bold" sx={{ fontSize: '50px' }}>
            {nombre}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
            <List>
              <ListItem>
                <Typography variant="h6" component="div" align="center" fontWeight="bold" sx={{ textDecoration: 'underline', marginBottom: 2 }}>
                  Información

                  <Collapse in={openInformacion} sx={{ transitionDuration : "400ms" }}>
                    <Typography>{informacion}</Typography>
                  </Collapse>
                </Typography>
              </ListItem>

              <ListItem>
                <Typography variant="h6" component="div" align="center" fontWeight="bold" sx={{ textDecoration: 'underline', marginBottom: 2 }}>
                  Pelaje

                  <Collapse in={openInformacion} sx={{ transitionDuration : "400ms" }}>
                    <Typography>{pelaje}</Typography>
                  </Collapse>
                </Typography>
              </ListItem>

              <ListItem>
                <Typography variant="h6" component="div" align="center" fontWeight="bold" sx={{ textDecoration: 'underline', marginBottom: 2 }}>
                  Carácter

                  <Collapse in={openInformacion} sx={{ transitionDuration : "400ms" }}>
                    <Typography>{caracter}</Typography>
                  </Collapse>
                </Typography>
              </ListItem>

            </List>
          </Box>

        </CardContent>
      </Card>
      </Box>
      </div>
    </>
  );
};

export default CardAnimalDetalles
