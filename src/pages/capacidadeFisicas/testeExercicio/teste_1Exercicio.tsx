import { Box, Button, Container, Grid } from '@mui/material';

import { IFormErrorsCustom, TextFieldCustom, useCustomForm } from '../../../components/forms';
import { Form } from "@unform/web";
import { TextSelectCustom } from '../../../components/forms/TextSelectCustom';
import * as yup from 'yup';
import { SectionTitle } from '../../fatoresRisco/riscoCardiaco/style';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export interface FormValues {
    nome: string;
    idade: string;
    etnia: string;
    estatura: string;
    peso: string;
    sexo: string;
    frequênciacardíaca: string;
    nivel: string;
    IAF: string;
}

const formValidateSchema: yup.Schema<FormValues> = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    idade: yup.string().required("Campo obrigatório"),
    etnia: yup.string().required("Campo obrigatório"),
    estatura: yup.string()
        .matches(/^\d+(\.\d{1,2})?$/, 'Somente números e ponto são permitidos para representar números decimais.')
        .required("Campo obrigatório"),
    peso: yup.string().required("Campo obrigatório"),
    sexo: yup.string().required("Campo obrigatório"),
    frequênciacardíaca: yup.string().required("Campo obrigatório"),
    nivel: yup.string().required("Campo obrigatório"),
    IAF: yup.string().required("Campo obrigatório"),
})

export const Teste_1Exercicio: React.FC = () => {

    const [VoMax, setVoMax] = useState(0);
    const [result, setResult] = useState(0);
    const navigate = useNavigate()
    const { formRef, save } = useCustomForm();


    useEffect(() => {
        setResult(VoMax);
    }, [VoMax])

    const handSave = (dados: FormValues) => {
        console.log(dados.estatura)
        formValidateSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {

                const result = (15 * ((220 - parseFloat(dadosValidados.idade)) / parseFloat(dadosValidados.frequênciacardíaca)))
                setVoMax(result)



            })
            .catch((errors: yup.ValidationError) => {
                const ValidationError: IFormErrorsCustom = {}

                errors.inner.forEach(error => {
                    if (!error.path) return;
                    ValidationError[error.path] = error.message;
                });
                console.log(errors.errors);
                formRef.current?.setErrors(ValidationError)
            })
    };

    return (
        <Container>
            <Form ref={formRef} onSubmit={(dados) => handSave(dados)}>
                <Box margin={1} display='flex' flexDirection='column' >
                    <Grid container direction='column' padding={2} spacing={2}>
                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Nome"
                                name="nome"
                                disabled={false}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Idade"
                                name="idade"
                                disabled={false}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Peso"
                                name="peso"
                                disabled={false}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="etnia"
                                menu={[
                                    {
                                        nome: 'Mestiço',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Branco',
                                        id: '2'
                                    },
                                    {
                                        nome: 'Negro',
                                        id: '3'
                                    },
                                    {
                                        nome: 'Oriental',
                                        id: '4'
                                    },
                                    {
                                        nome: 'Indio',
                                        id: '6'
                                    },
                                    {
                                        nome: 'Espánico',
                                        id: '8'
                                    }
                                ]}
                                disabled={false}
                                label="Etnia"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Estatura"
                                name="estatura"
                                disabled={false}
                            />

                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                menu={[
                                    {
                                        nome: 'Homem',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Mulher',
                                        id: '2'
                                    }]}

                                label="Sexo"
                                name="sexo"
                                disabled={false}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="nivel"
                                menu={[
                                    {
                                        nome: 'Sedentário',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Ativo',
                                        id: '2'
                                    },
                                    {
                                        nome: 'Atleta',
                                        id: '3'
                                    },
                                ]}
                                disabled={false}
                                label="Nível de Condicionamento"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Frequência cardíaca"
                                name="frequênciacardíaca"
                                disabled={false}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="IAF"
                                menu={[
                                    {
                                        nome: 'Evita caminhada ou esforço ',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Caminha por prazer, usa escadas de forma rotineira, ocasionalmente se exercita de forma suficiente para causar respiração ofegante ou transpiração',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Pratica exercício de 10 a 60 minutos por semana',
                                        id: '3'
                                    },
                                    {
                                        nome: 'Corre menos de 1.6 km por semana ou gasta menos de 30 minutos por semana em atividade física comparável',
                                        id: '4'
                                    },
                                    {
                                        nome: 'Corre de 1.6 a 8 km por semana ou gasta de 30 a 60 minutos por semana em atividade física comparável',
                                        id: '5'
                                    },
                                    {
                                        nome: 'Corre 8 a 16 km por semana ou gasta de 1 a 3 horas por semana em atividade física comparável',
                                        id: '6'
                                    },
                                    {
                                        nome: 'Corre mais de 16 km por semana ou gasta mais de 3 horas por semana em atividade física comparável',
                                        id: '7'
                                    },
                                ]}
                                disabled={false}
                                label="Indice de Atividade Física"
                            />
                        </Grid>

                    </Grid>
                </Box>
            </Form>

            <SectionTitle>AVALIAÇÃO DO VO2 MÁXIMO SEM EXERCÍCIO:</SectionTitle>

            <button onClick={save}>calcular</button>
            <Button onClick={() => navigate('/ferramentas')}>voltar</Button>

            <>
                <p>
                    P.A. MÉDIA:
                </p>
                {result}


            </>


        </Container >
    );
};