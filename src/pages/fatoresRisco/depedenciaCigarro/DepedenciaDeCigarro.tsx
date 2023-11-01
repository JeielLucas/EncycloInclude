import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IFormErrorsCustom, useCustomForm } from '../../../components/forms';
import { Form } from "@unform/web";
import { TextSelectCustom } from '../../../components/forms/TextSelectCustom';
import * as yup from 'yup';
import { FormValues } from './type';


const formValidateSchema: yup.Schema<FormValues> = yup.object().shape({
    tempoFumando: yup.string().required("Campo obrigatório"),
    fumarEmLugarPublico: yup.string().required("Campo obrigatório"),
    cigarro: yup.string().required("Campo obrigatório"),
    qntCigarros: yup.string().required("Campo obrigatório"),
    fequenciaDoFumante: yup.string().required("Campo obrigatório"),
    fumaDoente: yup.string().required("Campo obrigatório"),

})

export const DepedenciaDeCigarro: React.FC = () => {

    // const [resultpaMedia, setResultPaMedia] = useState('');
    const [score, setScore] = useState(0);
    const [result, setResult] = useState('')
    const [soma, setSoma] = useState(0)

    const { formRef, save } = useCustomForm();

    const GrauDeDependência: { [key: number]: string } = {
        1: 'Muito Baixo',
        2: 'Baixo',
        3: 'Médio',
        4: 'Elevado',
        5: 'Muito Elevado',
    }

    useEffect(() => {

        if (score) {
            setResult(GrauDeDependência[score]);
        }
    }, [score])

    const handSave = (dados: FormValues) => {

        formValidateSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {
               


                const valorTotal = parseInt(dadosValidados.tempoFumando) + parseInt(dadosValidados.fequenciaDoFumante) + parseInt(dadosValidados.cigarro) + parseInt(dadosValidados.fumaDoente) + parseInt(dadosValidados.fumarEmLugarPublico) + parseInt(dadosValidados.qntCigarros);
                setSoma(valorTotal)
                
                if (valorTotal >= 0 && valorTotal <=2) {
                    setScore(1);
                } else if (valorTotal >= 3 && valorTotal < 4) {
                    setScore(2);
                } else if (valorTotal === 5) {
                    setScore(3);
                } else if (valorTotal >= 6 && valorTotal <= 7) {
                    setScore(4);
                } else if (valorTotal >= 8 && valorTotal <= 10) {
                    setScore(5);
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
            <Form ref={formRef} onSubmit={(dados) => handSave(dados)}>
                <Box margin={1} display='flex' flexDirection='column' >
                    <Grid container direction='column' padding={2} spacing={2}>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="tempoFumando"
                                menu={[
                                    {
                                        nome: ' Dentro de 5 minutos',
                                        id: '3'
                                    },
                                    {
                                        nome: 'Entre 6-30 minutos',
                                        id: '2'
                                    },
                                    {
                                        nome: ' Entre 31-60 minutos',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Após 60 minutos',
                                        id: '0'
                                    },
                                ]}
                                disabled={false}
                                label="Quanto tempo após acordar você fuma o primeiro cigarro? "
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="fumarEmLugarPublico"
                                menu={[
                                    {
                                        nome: 'Sim',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Não',
                                        id: '0'
                                    }
                                ]}
                                disabled={false}
                                label="Você acha difícil não fumar em lugares proibidos?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="cigarro"
                                menu={[
                                    {
                                        nome: 'O primeiro da manhã',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Outros',
                                        id: '0'
                                    }
                                ]}
                                disabled={false}
                                label="Qual cigarro do dia traz mais satisfação?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="qntCigarros"
                                menu={[
                                    {
                                        nome: ' Menos de 10',
                                        id: '0'
                                    },
                                    {
                                        nome: 'De 11 a 20',
                                        id: '1'
                                    },
                                    {
                                        nome: 'De 21 a 30',
                                        id: '2'
                                    },
                                    {
                                        nome: 'Mais de 31',
                                        id: '3'
                                    },
                                ]}
                                disabled={false}
                                label="Quantos cigarros você fuma por dia?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="fequenciaDoFumante"
                                menu={[
                                    {
                                        nome: 'Sim',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Não',
                                        id: '0'
                                    }
                                ]}
                                disabled={false}
                                label="Você fuma mais freqüentemente pela manhã?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="fumaDoente"
                                menu={[
                                    {
                                        nome: 'Sim',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Não',
                                        id: '0'
                                    }
                                ]}
                                disabled={false}
                                label="Você fuma mesmo doente, quando precisa ficar na cama a maior parte do tempo?"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Form>

            <button onClick={save}>Diagnosticar</button>

            <>
                <p>
                    Grau de dependência: {result}
                </p>
                <p>
                    score: {soma}
                </p>
            </>


        </Container>
    );
};