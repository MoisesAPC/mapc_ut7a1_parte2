import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Grid container spacing={1} sx={{ width: '100%', justifyContent: 'space-between' }}>
                        <Grid xs={2} md={2} lg={2}>        
                            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Inicio</Link>
                        </Grid>
 
                        <Grid xs={2} md={2} lg={2}>        
                            <Link to={'/gatos'} style={{textDecoration:'none', color:'white'}}>Gatos</Link>
                        </Grid>

                        <Grid xs={2} md={2} lg={2}>        
                            <Link to={'/perros'} style={{textDecoration:'none', color:'white'}}>Perros</Link>
                        </Grid>

                        <Grid xs={2} md={2} lg={2}>        
                            <Link to={'/lagartos'} style={{textDecoration:'none', color:'white'}}>Lagartos</Link>
                        </Grid>

                        <Grid xs={2} md={2} lg={2}>        
                            <Link to={'/tortugas'} style={{textDecoration:'none', color:'white'}}>Tortugas</Link>
                        </Grid>

                        <Grid xs={2} md={2} lg={2}>        
                            <Link to={'/bovinos'} style={{textDecoration:'none', color:'white'}}>Bovinos</Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Dashboard;
