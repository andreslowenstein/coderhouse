import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartWidget from './CartWidget';

const theme = createTheme({
    palette: {
        primary: {
            main: "#c72b23",
            contrastText: "#fefcfb"
        },
    }
});


export class NavBar extends Component {

    render() {
        return (
            <>
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" theme={theme}>
                        <Toolbar>
                            <IconButton
                                size="small"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <Typography variant="h6"> Music Shop </Typography>

                            </IconButton>
                            <FormControl variant="standard" style={{ minWidth: 180 }}

                            >
                                <InputLabel id="demo-simple-select-label" size="big">Categorias</InputLabel>
                                <Select
                                    labelId="select-categories-label"
                                    id="select-categories"
                                    label="Browse Categories"
                                >
                                    <MenuItem value={10}>Instrumentos de Cuerdas</MenuItem>
                                    <MenuItem value={20}>Instrumentos de viento</MenuItem>
                                    <MenuItem value={30}>Percusión</MenuItem>
                                </Select>
                            </FormControl>
                            <CartWidget />
                        </Toolbar>
                    </AppBar>
                </Box>
            </>
        )
    }
}

export default NavBar;
