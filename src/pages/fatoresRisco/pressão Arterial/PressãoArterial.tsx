import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SectionTitle } from './style';
import { IFormErrorsCustom, TextFieldCustom, useCustomForm } from '../../../components/forms';
import { Form } from "@unform/web";
import { TextSelectCustom } from '../../../components/forms/TextSelectCustom';
import * as yup from 'yup';
import { FormValues } from './type';

const formValidateSchema: yup.Schema<FormValues> = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    idade: yup.string().required("Campo obrigatório"),
    etnia: yup.string().required("Campo obrigatório"),
    estatura: yup.string().required("Campo obrigatório"),
    peso: yup.string().required("Campo obrigatório"),
    fcRepouso: yup.string().required("Campo obrigatório"),
    nivelCondicionamento: yup.string().required("Campo obrigatório"),
    dataAfericao: yup.string().required("Campo obrigatório"),
    medicamento: yup.string().required("Campo obrigatório"),
    resultadoAfericao: yup.string().required("Campo obrigatório"),
    ingeriuEstimulantes: yup.string().required("Campo obrigatório"),
    estressado: yup.string().required("Campo obrigatório"),
    fumouUltimos30Min: yup.string().required("Campo obrigatório"),
    problemasSono: yup.string().required("Campo obrigatório"),
    comeuUltimos30Min: yup.string().required("Campo obrigatório"),
    atividadeFisicaUltimos30Min: yup.string().required("Campo obrigatório"),
    sistolica: yup.string().required("Campo obrigatório"),
    diastolica: yup.string().required("Campo obrigatório"),
})

export const PressãoArterial: React.FC = () => {

    // const [resultpaMedia, setResultPaMedia] = useState('');
    const [resultSistolica, setResultSistolica] = useState('');
    const [resultDiastolica, setResultDiastolica] = useState('');
    const [resultReavaliacaoS, setResultReavaliacaoS] = useState(0);
    const [resultReavaliacaoD, setResultReavaliacaoD] = useState(0);
    const [resultReavaliacao, setResultReavaliacao] = useState('');

    const { formRef, save } = useCustomForm();

    const reavaliacao: { [key: number]: string } = {
        1: 'REAVALIAR EM 01 ANO',
        2: 'REAVALIAR EM 06 MESES',
        3: 'A CADA 02 MESES',
        4: 'A CADA 01 MÊS',
        5: 'IMEDIATO',
        6: 'A CADA 02 MESES'
    }

    useEffect(() => {
        
        if (resultReavaliacaoS >= resultReavaliacaoD) {
            setResultReavaliacao(reavaliacao[resultReavaliacaoS]);
        } else {
            setResultReavaliacao(reavaliacao[resultReavaliacaoD]);
        }
    },[resultReavaliacaoS, resultReavaliacaoD])

    const handSave = (dados: FormValues) => {

        formValidateSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {
                if (dadosValidados.ingeriuEstimulantes === '1') {
                    alert('A ingestão de café, álcool ou estimulantes 30 minutos antes da aferição pode alterar seu resultado, refaça a aferição.')
                }
                if (dadosValidados.estressado === '1') {
                    alert('O estresse pode alterar a PA, tente aferir quando a pessoa estiver mais calma.')
                }
                if (dadosValidados.fumouUltimos30Min === '1') {
                    alert('Afira novamente após 30 minutos do último cigarro.')
                }
                if (dadosValidados.problemasSono === '1') {
                    alert('Afira novamente após uma boa noite de sono, se o problema persistir procure um especialista.')
                }
                if (dadosValidados.comeuUltimos30Min === '1') {
                    alert('Afira novamente após 30 minutos da última refeição.')
                }
                if (dadosValidados.atividadeFisicaUltimos30Min === '1') {
                    alert('Afira novamente após 30 minutos da prática de atividade física.')
                }


                if (parseInt(dadosValidados.sistolica) < 130) {
                    setResultSistolica('Normal');
                    setResultReavaliacaoS(1)
                } else if (parseInt(dadosValidados.sistolica) >= 130 && parseInt(dadosValidados.sistolica) < 140) {
                    setResultSistolica('Normal - Limítrofe');
                    setResultReavaliacaoS(2)
                } else if (parseInt(dadosValidados.sistolica) >= 140 && parseInt(dadosValidados.sistolica) < 160) {
                    setResultSistolica('Hipertensão leve');
                    setResultReavaliacaoS(3)
                } else if (parseInt(dadosValidados.sistolica) >= 160 && parseInt(dadosValidados.sistolica) < 180) {
                    setResultSistolica('Hipertensão moderada');
                    setResultReavaliacaoS(4)
                } else if (parseInt(dadosValidados.sistolica) >= 180 && parseInt(dadosValidados.sistolica) < 210) {
                    setResultSistolica('Hipertensão grave');
                    setResultReavaliacaoS(5)
                } else if (parseInt(dadosValidados.sistolica) >= 210) {
                    setResultSistolica('Hipertensão muito grave');
                    setResultReavaliacaoS(6)
                } else {
                    setResultSistolica('Valores fora do padrão');
                }

                if (parseInt(dadosValidados.diastolica) < 85) {
                    setResultDiastolica('Normal');
                    setResultReavaliacaoD(1)
                } else if (parseInt(dadosValidados.diastolica) >= 85 && parseInt(dadosValidados.diastolica) < 90) {
                    setResultDiastolica('Normal - Limítrofe');
                    setResultReavaliacaoD(2)
                } else if (parseInt(dadosValidados.diastolica) >= 90 && parseInt(dadosValidados.diastolica) < 100) {
                    setResultDiastolica('Hipertensão leve');
                    setResultReavaliacaoD(3)
                } else if (parseInt(dadosValidados.diastolica) >= 100 && parseInt(dadosValidados.diastolica) < 120) {
                    setResultDiastolica('Hipertensão moderada');
                    setResultReavaliacaoD(4)
                } else if (parseInt(dadosValidados.diastolica) >= 110 && parseInt(dadosValidados.diastolica) < 120) {
                    setResultDiastolica('Hipertensão grave');
                    setResultReavaliacaoD(5)
                } else if (parseInt(dadosValidados.diastolica) >= 120) {
                    setResultDiastolica('Hipertensão muito grave');
                    setResultReavaliacaoD(6)
                } else {
                    setResultDiastolica('Valores fora do padrão');
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
                            <TextFieldCustom
                                fullWidth
                                label="F.C. de Repouso"
                                name="fcRepouso"
                                disabled={false}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="nivelCondicionamento"
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
                                type="date"
                                label="Data de Aferição"
                                name="dataAfericao"
                                disabled={false}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Medicamento"
                                name="medicamento"
                                disabled={false}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Qual o resultado da última aferição?"
                                name="resultadoAfericao"
                                disabled={false}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="ingeriuEstimulantes"
                                menu={[
                                    {
                                        nome: 'Sim',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Não',
                                        id: '2'
                                    },
                                ]}
                                disabled={false}
                                label="Ingeriu café, álcool ou estimulantes nos últimos 30 minutos?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="estressado"
                                menu={[
                                    {
                                        nome: 'Sim',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Não',
                                        id: '2'
                                    },
                                ]}
                                disabled={false}
                                label="Você está estressado?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="fumouUltimos30Min"
                                menu={[
                                    {
                                        nome: 'Sim',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Não',
                                        id: '2'
                                    },
                                ]}
                                disabled={false}
                                label="Você fumou nos últimos 30 minutos?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="problemasSono"
                                menu={[
                                    {
                                        nome: 'Sim',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Não',
                                        id: '2'
                                    },
                                ]}
                                disabled={false}
                                label="Você teve problemas de sono na noite passada?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="comeuUltimos30Min"
                                menu={[
                                    {
                                        nome: 'Sim',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Não',
                                        id: '2'
                                    },
                                ]}
                                disabled={false}
                                label="Você se alimentou nos últimos 30 minutos?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="atividadeFisicaUltimos30Min"
                                menu={[
                                    {
                                        nome: 'Sim',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Não',
                                        id: '2'
                                    },
                                ]}
                                disabled={false}
                                label="Você praticou atividade física nos últimos 30 minutos?"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Sistólica"
                                name="sistolica"
                                disabled={false}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Diastólica"
                                name="diastolica"
                                disabled={false}
                            />
                        </Grid>

                    </Grid>
                </Box>
            </Form>

            <SectionTitle>De acordo com a classificação proposta pelo III Consenso Brasileiro de Hipertensão Arterial, sua Pressão Arteria é:</SectionTitle>
          
            <button onClick={save}>Diagnosticar</button>

            <>
                <p>
                    P.A. MÉDIA: 
                </p>
                <p>
                    SISTÓLICA: {resultSistolica}
                </p>
                <p>
                    DIASTÓLICA: {resultDiastolica}
                </p>
                <p>
                    REAVALIAÇÃO: {resultReavaliacao}
                </p>
            </>


        </Container>
    );
};