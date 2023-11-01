import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IFormErrorsCustom, TextFieldCustom, useCustomForm } from '../../../components/forms';
import { Form } from "@unform/web";
import * as yup from 'yup';
import { FormValues } from './type';
import { TextSelectCustom } from '../../../components/forms/TextSelectCustom';


const formValidateSchema: yup.Schema<FormValues> = yup.object().shape({
    peso: yup.string().required("Campo obrigatório"),
    sexo: yup.string().required("Campo obrigatório"),
    estatura: yup.string()
        .matches(/^\d*\.?\d*$/, 'Somente números e ponto são permitidos para representar números decimais.')
        .required("Campo obrigatório"),

})

export const Obesidade: React.FC = () => {

    const [score, setScore] = useState(0);
    const [scoreRisco, setScoreRisco] = useState(0);
    const [result, setResult] = useState('')
    const [resultRisco, setResultRisco] = useState('')
    const [imc, setIMC] = useState(0)

    const { formRef, save } = useCustomForm();

    const classificacao: { [key: number]: string } = {
        1: 'Baixo do peso',
        2: 'Peso normal',
        3: 'Obesidade leve',
        4: 'Obesidade moderada',
        5: 'Obesidade severa',
    }

    const classificacaoRisco: { [key: number]: string } = {
        1: 'Risco baixo',
        2: 'Sem risco',
        3: 'Risco moderado',
        4: 'Risco elevado',
    }

    useEffect(() => {

        if (score) {
            setResult(classificacao[score]);
        }

        if (scoreRisco) {
            setResultRisco(classificacaoRisco[scoreRisco]);
        }
    }, [score, scoreRisco])

    const handSave = (dados: FormValues) => {

        formValidateSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {
                const Imc = parseFloat(dadosValidados.peso) / (parseFloat(dadosValidados.estatura) * parseFloat(dadosValidados.estatura));

                setIMC(parseFloat(Imc.toFixed(2)))

                if (Imc < 18.5) {
                    setScore(1);
                } else if (Imc >= 18.5 && Imc < 24.9) {
                    setScore(2);
                } else if (Imc >= 25 && Imc < 30) {
                    setScore(3);
                } else if (Imc >= 30 && Imc <= 40) {
                    setScore(4);
                } else if (Imc >= 40) {
                    setScore(5);
                }

                if (dadosValidados.sexo === '1') {
                    if (Imc >= 17.9 && Imc <= 18.9) {
                        setScoreRisco(1);
                    } else if (Imc >= 19 && Imc < 24.9) {
                        setScoreRisco(2);
                    } else if (Imc >= 25 && Imc < 27.7) {
                        setScoreRisco(3);
                    } else if (Imc >= 27.8) {
                        setScoreRisco(4);
                    }

                } else {
                    if (Imc >= 15 && Imc < 18) {
                        setScoreRisco(1);
                    } else if (Imc >= 18 && Imc < 24.4) {
                        setScoreRisco(2);
                    } else if (Imc >= 24.4 && Imc < 27.2) {
                        setScoreRisco(3);
                    } else if (Imc >= 27.2) {
                        setScoreRisco(4);
                    }
                }

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
            <p>
                O I.M.C. é um índice desenvolvido por estudos científicos que relacionam o peso e a estatura com o estado nutricional. Este índice não considera a composição corporal (quantidade de massa muscular, massa gorda, nível de hidratação e outros), por esse motivo não é uma forma adequada de avaliação de atletas que normalmente tem uma grande quantidade de massa muscular. Para uma melhor avaliação esse índice deve ser somado à outros métodos de avaliação como a relação cintura quadril e avaliação do percentual de gordura.
            </p>

            <Form ref={formRef} onSubmit={(dados) => handSave(dados)}>
                <Box margin={1} display='flex' flexDirection='column' >
                    <Grid container direction='column' padding={2} spacing={2}>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="sexo"
                                menu={[
                                    {
                                        nome: 'Homem',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Mulher',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Sexo"
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
                            <TextFieldCustom
                                fullWidth
                                label="Estatura"
                                name="estatura"
                                disabled={false}
                            />
                        </Grid>

                    </Grid>
                </Box>
            </Form>

            <button onClick={save}>Calcular IMC</button>

            <>
                <p>
                    Seu índice é de {imc}  kg/m².
                </p>
                <p>
                    De acordo com a classificação do peso proposta pela Organização Mundial de Saúde (OMS), sua categoria é:
                    <p>
                        {result}
                    </p>

                    <p>
                        {resultRisco}
                    </p>
                </p>
            </>


        </Container>
    );
};