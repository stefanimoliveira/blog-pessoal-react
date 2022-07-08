import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar"
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        alert("Usuário deslogado!")
        navigate("/login")
    }

    var navbarComponent;

    if(token != ""){
       navbarComponent =  <AppBar position="static">
        <Toolbar variant="dense">
            <Box className="cursor">
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decoration-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                </Link>
                <Link to="/postagens" className="text-decoration-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className="text-decoration-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                </Link>
                <Link to="/formularioTema" className="text-decoration-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            cadastrar tema
                        </Typography>
                    </Box>
                </Link>

                <Box mx={1} className="cursor" onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>


            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
           {navbarComponent}
        </>
    )
}
export default Navbar