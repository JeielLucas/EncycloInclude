import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IFormErrorsCustom, useCustomForm } from '../../../components/forms';
import { Form } from "@unform/web";
import * as yup from 'yup';
import { TextSelectCustom } from '../../../components/forms/TextSelectCustom';


export interface FormValues {
    intensidade: string;
    frequencia: string;
    duracao: string;
}

const formValidateSchema: yup.Schema<FormValues> = yup.object().shape({
    intensidade: yup.string().required("Campo obrigatório"),
    frequencia: yup.string().required("Campo obrigatório"),
    duracao: yup.string().required("Campo obrigatório"),
})

export const Sedentarismo: React.FC = () => {

    const [score1, setScore1] = useState(0);
    const [resultAvaliacao, setResultAvaliacao] = useState('');
    const [resultCategoria, setResultCategoria] = useState('');
    const [score2, setScore2] = useState(0);
    const [sedentarismo, setSedentarismo] = useState(0)

    const { formRef, save } = useCustomForm();

    const avaliacao: { [key: number]: string } = {
        1: 'Estilo de vida muito ativo',
        2: 'Ativo e saudável',
        3: 'Aceitável (poderia ser melhor)',
        4: 'Não suficientemente boa',
        5: 'Sedentário',
    }

    const categoriaCapacidadeFisica: { [key: number]: string } = {
        1: 'Alta',
        2: 'Muito boa',
        3: 'Boa',
        4: 'Pobre',
        5: 'Muito Pobre',
    }

    useEffect(() => {

        if (score1) {
            setResultAvaliacao(avaliacao[score1]);
        }

        if (score2) {
            setResultCategoria(categoriaCapacidadeFisica[score2]);
        }
    }, [score1, score2])

    const handSave = (dados: FormValues) => {

        formValidateSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {
                const sedentario = parseInt(dadosValidados.intensidade) * (parseInt(dadosValidados.duracao) * parseInt(dadosValidados.frequencia));
                console.log(dadosValidados.intensidade)
                setSedentarismo(parseInt(sedentario.toFixed(2)))

                if (sedentario >= 80 && sedentario <= 100) {
                    setScore1(1);
                    setScore2(1);
                } else if (sedentario >= 60 && sedentario <= 79) {
                    setScore1(2);
                    setScore2(2);
                } else if (sedentario >= 40 && sedentario < 59) {
                    setScore1(3);
                    setScore2(3);
                } else if (sedentario >= 20 && sedentario <= 39) {
                    setScore1(4);
                    setScore2(4);
                } else if (sedentario < 20) {
                    setScore1(5);
                    setScore2(5);
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
                                name="intensidade"
                                menu={[
                                    {
                                        nome: 'Pesada - Respiração pesada e sustentada por toda a atividade com forte transpiração após alguns minutos (como corre um pouco abaixo ou na intensidade máxima).',
                                        id: '5'
                                    },
                                    {
                                        nome: ' Pesada intermitente - Respiração pesada intermitente com transpiração média (como no tênis).',
                                        id: '4'
                                    },
                                    {
                                        nome: 'Moderadamente pesada - Respiração moderada constante (como no ciclismo).',
                                        id: '3'
                                    },
                                    {
                                        nome: 'Moderada - Respiração um pouco acima da normal, com picos de respiração moderada (como no vôlei).',
                                        id: '2'
                                    },
                                    {
                                        nome: 'Leve - Respiração constante um pouco acima da normal (Como na caminhada).',
                                        id: '1'
                                    }
                                ]}
                                disabled={false}
                                label="Intensidade"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="duracao"
                                menu={[
                                    {
                                        nome: 'Acima de 30 min',
                                        id: '4'
                                    },
                                    {
                                        nome: '20 a 30 min',
                                        id: '3'
                                    },
                                    {
                                        nome: '10 a 20 min',
                                        id: '2'
                                    },
                                    {
                                        nome: 'Abaixo de 10 min',
                                        id: '1'
                                    }
                                ]}
                                disabled={false}
                                label="Duração"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="frequencia"
                                menu={[
                                    {
                                        nome: 'Diariamente ou 6 vezes por semana',
                                        id: '5'
                                    },
                                    {
                                        nome: '3 a 5 vezes por semana',
                                        id: '4'
                                    },
                                    {
                                        nome: '1 a 2 vezes por semanan',
                                        id: '3'
                                    },
                                    {
                                        nome: 'Poucas vezes ao mês',
                                        id: '2'
                                    },
                                    {
                                        nome: 'Uma ou menos vezes por mês',
                                        id: '1'
                                    }
                                ]}
                                disabled={false}
                                label="Frequência"
                            />
                        </Grid>

                    </Grid>
                </Box>
            </Form>

            <button onClick={save}>Calcular</button>

            <>
                <p>
                    Seu ESCORE FINAL é de {sedentarismo}.
                </p>
                <p>
                    Avaliação: {resultAvaliacao}
                </p>
                <p>
                    Categoria de Capacidade Física: {resultCategoria}

                </p>
            </>


        </Container>
    );
};