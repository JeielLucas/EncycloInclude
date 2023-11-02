import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IFormErrorsCustom, useCustomForm } from '../../../components/forms';
import { Form } from "@unform/web";
import * as yup from 'yup';
import { FormValues } from './type';
import { TextSelectCustom } from '../../../components/forms/TextSelectCustom';

const formValidateSchema: yup.Schema<FormValues> = yup.object().shape({
    DoresCabeca: yup.string().required('Campo obrigatório.'),
    insonia: yup.string().required('Campo obrigatório.'),
    comerExcesso: yup.string().required('Campo obrigatório.'),
    dorInferior: yup.string().required('Campo obrigatório.'),
    ulceras: yup.string().required('Campo obrigatório.'),
    nervosimos: yup.string().required('Campo obrigatório.'),
    pesadelo: yup.string().required('Campo obrigatório.'),
    pressãoArterial: yup.string().required('Campo obrigatório.'),
    maoPesFrios: yup.string().required('Campo obrigatório.'),
    ingestaoAlcool: yup.string().required('Campo obrigatório.'),
    palpitacao: yup.string().required('Campo obrigatório.'),
    indigestao: yup.string().required('Campo obrigatório.'),
    dificuldadeSexual: yup.string().required('Campo obrigatório.'),
    preocupacaoExessiva: yup.string().required('Campo obrigatório.'),
    nauseas: yup.string().required('Campo obrigatório.'),
    irritabilidade: yup.string().required('Campo obrigatório.'),
    sono: yup.string().required('Campo obrigatório.'),
    perdaApitite: yup.string().required('Campo obrigatório.'),
    doresMusculares: yup.string().required('Campo obrigatório.'),
    crisesRespiratorias: yup.string().required('Campo obrigatório.'),
    depressao: yup.string().required('Campo obrigatório.'),
    pequenoAcidente: yup.string().required('Campo obrigatório.'),
    raiva: yup.string().required('Campo obrigatório.'),
});

export const QuestionarioEstresse: React.FC = () => {

    const [score, setScore] = useState(0);
    const [result, setResult] = useState('')
    const [soma, setSoma] = useState(0)
    const { formRef, save } = useCustomForm();

    const classificacao: { [key: number]: string } = {
        1: 'Sem estresse',
        2: 'Estresse Moderado',
        3: 'Estresse intenso',
        4: 'Estresse muito intenso',
    }

    useEffect(() => {

        if (score) {
            setResult(classificacao[score]);
        }


    }, [score])

    const handSave = (dados: FormValues) => {

        formValidateSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {
                const soma_ = parseInt(dadosValidados.DoresCabeca) +
                    parseInt(dadosValidados.insonia) +
                    parseInt(dadosValidados.comerExcesso) +
                    parseInt(dadosValidados.dorInferior) +
                    parseInt(dadosValidados.ulceras) +
                    parseInt(dadosValidados.nervosimos) +
                    parseInt(dadosValidados.pesadelo) +
                    parseInt(dadosValidados.pressãoArterial) +
                    parseInt(dadosValidados.maoPesFrios) +
                    parseInt(dadosValidados.ingestaoAlcool) +
                    parseInt(dadosValidados.palpitacao) +
                    parseInt(dadosValidados.indigestao) +
                    parseInt(dadosValidados.dificuldadeSexual) +
                    parseInt(dadosValidados.preocupacaoExessiva) +
                    parseInt(dadosValidados.nauseas) +
                    parseInt(dadosValidados.irritabilidade) +
                    parseInt(dadosValidados.sono) +
                    parseInt(dadosValidados.perdaApitite) +
                    parseInt(dadosValidados.doresMusculares) +
                    parseInt(dadosValidados.crisesRespiratorias) +
                    parseInt(dadosValidados.depressao) +
                    parseInt(dadosValidados.pequenoAcidente) +
                    parseInt(dadosValidados.raiva);

                setSoma(soma_)

                if (soma  < 4) {
                    setScore(1);
                } else if (soma >= 4 && soma < 20) {
                    setScore(2);
                } else if (soma >= 20 && soma < 30) {
                    setScore(3);
                } else if (soma >= 30) {
                    setScore(4);
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
                                name="DoresCabeca"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Dores de cabeça por tensão e enxaqueca"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="insonia"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Insônia, Fadiga"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="comerExcesso"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Comer em execesso"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="dorInferior"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Dor na parte inferior das costas"
                            />
                        </Grid>


                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="ulceras"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="úlceras ou gastrite"
                            />
                        </Grid>


                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="nervosimos"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Nervosismos"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="pesadelo"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Pesadelos"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="pressãoArterial"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Pressão arterial alterada"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="maoPesFrios"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Mãos e pés frios e suados"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="ingestaoAlcool"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Ingestão de álcool ou remédios sem receitas"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="palpitacao"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Palpitações cardíacas(Tarquicardia)"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="indigestao"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Indigestão"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="dificuldadeSexual"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Dificuldade sexuais"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="preocupacaoExessiva"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Preocupações excessivas"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="nauseas"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Náuseas e vômitos"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="irritabilidade"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Irritabilidade"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="sono"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Sono irregular acordando várias vezes por noite"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="perdaApitite"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Perda de apetite e diarréia"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="doresMusculares"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Dores nos músculos do pescoço e ombros"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="crisesRespiratorias"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Crises respiratórias e dificuldade em respirar"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="depressao"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Períodos de depressão"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="pequenoAcidente"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Pequenos acidentes"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="raiva"
                                menu={[
                                    {
                                        nome: 'Não tenho tido problemas',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Ocasionalmente',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Frequentemente',
                                        id: '2'
                                    }
                                ]}
                                disabled={false}
                                label="Sentimento de raiva"
                            />
                        </Grid>

                    </Grid>
                </Box>
            </Form>

            <button onClick={save}>Calcular IMC</button>

            <>
                <p>
                   Total {soma} .
                </p>
                <p>
                   Nível de  estresse
                    <p>
                        {result}
                    </p>
                </p>
            </>


        </Container>
    );
};