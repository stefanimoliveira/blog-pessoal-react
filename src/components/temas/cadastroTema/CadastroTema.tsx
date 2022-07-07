import { Button, Container, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";

import "./CadastroTema.css";

function CadastroTema() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage("token");
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado!")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id != undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLInputElement>) {
        if (id != undefined) {
            console.log(`tema`, tema, setTema)
            put(`tema`, tema, setTema, {
                headers: {
                    "authorization": token
                }
            })
            alert("Tema atualizado com sucesso!")
        } else {
            post(`tema`, tema, setTema, {
                Headers: {
                    "authorization": token
                }
            })
            alert("Tema cadastrado com sucesso!");
        }
        back()
    }

    function back() {
        navigate("/temas")
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form > 
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;