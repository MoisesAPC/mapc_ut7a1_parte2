import React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

const CardAnimal = ({ nombre, alt, imagen, tamano }) => {

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
              width: '100%',
              height: tamano,
              marginBottom: '16px',
              objectFit: 'cover'
            }}
          />

          <Typography variant="h6" component="div" align="center" fontWeight="bold">
            {nombre}
          </Typography>

        </CardContent>
      </Card>
      </Box>
      </div>
    </>
  );
};

export default CardAnimal
