import { Box, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { RiskLevel, SectionTitle } from './style';
import { IFormErrorsCustom, useCustomForm } from '../../../components/forms';
import { Form } from '@unform/web';
import * as yup from 'yup';
import { TextSelectCustom } from '../../../components/forms/TextSelectCustom';

const RiskLevels: { [key: number]: string } = {
    1: "Sem risco",
    2: "Risco abaixo da média",
    3: "Risco médio",
    4: "Risco moderado",
    5: "Risco alto",
    6: "Risco muito alto",
};

interface FormData {
    age: string;
    sex: string;
    weight: string;
    activity: string;
    smoking: string;
    bloodPressure: string;
    familyHistory: string;
    cholesterol: string;

}


const formValidateSchema: yup.Schema<FormData> = yup.object().shape({
    age: yup.string().required("Campo obrigatório"),
    sex: yup.string().required("Campo obrigatório"),
    weight: yup.string().required("Campo obrigatório"),
    activity: yup.string().required("Campo obrigatório"),
    smoking: yup.string().required("Campo obrigatório"),
    bloodPressure: yup.string().required("Campo obrigatório"),
    familyHistory: yup.string().required("Campo obrigatório"),
    cholesterol: yup.string().required("Campo obrigatório"),

});

export const RiscoCardiaco: React.FC = () => {

    const { formRef, save } = useCustomForm();
    const [riskLevel, setRiskLevel] = useState<number | null>(null);
    const [riskScore, setRiskScore] = useState<number | 0>(0);

    const handSave = (dados: FormData) => {

        formValidateSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {
                const newRiskScore = parseInt(dadosValidados.age) + parseInt(dadosValidados.sex) + parseInt(dadosValidados.weight) + parseInt(dadosValidados.activity) + parseInt(dadosValidados.smoking) + parseInt(dadosValidados.bloodPressure) + parseInt(dadosValidados.familyHistory) + parseInt(dadosValidados.cholesterol);
                setRiskScore(newRiskScore);

                if (newRiskScore >= 6 && newRiskScore <= 11) setRiskLevel(1);
                else if (newRiskScore >= 12 && newRiskScore <= 17) setRiskLevel(2);
                else if (newRiskScore >= 18 && newRiskScore <= 24) setRiskLevel(3);
                else if (newRiskScore >= 25 && newRiskScore <= 31) setRiskLevel(4);
                else if (newRiskScore >= 32 && newRiskScore <= 40) setRiskLevel(5);
                else setRiskLevel(null);

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
                    <h1>AVALIAÇÃO DO RISCO CARDÍACO</h1>
                    <Grid container direction='column' padding={2} spacing={2}>
                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="age"
                                menu={[
                                    {
                                        nome: '10 a 20 anos',
                                        id: '1'
                                    },
                                    {
                                        nome: '21 a 30 anos',
                                        id: '2'
                                    },
                                    {
                                        nome: '31 a 40 anos',
                                        id: '3'
                                    },
                                    {
                                        nome: '41 a 50 anos',
                                        id: '4'
                                    },
                                    {
                                        nome: '51 a 60 anos',
                                        id: '5'
                                    },
                                    {
                                        nome: 'Acima de 61 anos',
                                        id: '6'
                                    },
                                ]}
                                disabled={false}
                                label="Idade"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="sex"
                                menu={[
                                    {
                                        nome: 'Feminino c/ menos de 40 anos',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Feminino de 40 a 50 anos',
                                        id: '2'
                                    },
                                    {
                                        nome: 'Feminino c/ mais de 50 anos',
                                        id: '3'
                                    },
                                    {
                                        nome: 'Masculino',
                                        id: '4'
                                    },
                                    {
                                        nome: 'Masculino de baixa estatura',
                                        id: '6'
                                    },
                                    {
                                        nome: 'Masculino de baixa estatura e calvo',
                                        id: '7'
                                    },
                                ]}
                                disabled={false}
                                label="Nível de Condicionamento"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="weight"
                                menu={[
                                    {
                                        nome: 'Inferior a 2,3Kg do peso normal',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Menos de 2,3 a mais de 2,3Kg do peso normal',
                                        id: '1'
                                    },
                                    {
                                        nome: 'De 2,4 a 9,0Kg acima do peso normal',
                                        id: '2'
                                    },
                                    {
                                        nome: 'De 9,1 a 15,9Kg acima do peso normal',
                                        id: '3'
                                    },
                                    {
                                        nome: 'De 16 a 22,9Kg acima do peso normal',
                                        id: '5'
                                    },
                                    {
                                        nome: 'Mais de 23Kg acima do peso normal',
                                        id: '7'
                                    },
                                ]}
                                disabled={false}
                                label="Peso"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="activity"
                                menu={[
                                    {
                                        nome: 'Esforço profissional e recreativo intenso',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Esforço profissional e recreativo moderado',
                                        id: '2'
                                    },
                                    {
                                        nome: 'Trabalho sedentário e esforço recreativo intenso',
                                        id: '3'
                                    },
                                    {
                                        nome: 'Trabalho sedentário e esforço recreativo moderado',
                                        id: '5'
                                    },
                                    {
                                        nome: 'Trabalho sedentário e esforço recreativo leve',
                                        id: '6'
                                    },
                                    {
                                        nome: 'Ausência completa de qualquer exercício',
                                        id: '8'
                                    },
                                ]}
                                disabled={false}
                                label="Atividade"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="smoking"
                                menu={[
                                    {
                                        nome: 'Não fumante',
                                        id: '0'
                                    },
                                    {
                                        nome: 'Charuto e/ou cachimbo',
                                        id: '1'
                                    },
                                    {
                                        nome: '10 cigarros ou menos por dia',
                                        id: '2'
                                    },
                                    {
                                        nome: '11 a 20 cigarros por dia',
                                        id: '4'
                                    },
                                    {
                                        nome: '21 a 30 cigarros por dia',
                                        id: '6'
                                    },
                                    {
                                        nome: 'Mais de 31 cigarros por dia',
                                        id: '10'
                                    },
                                ]}
                                disabled={false}
                                label="Fumante"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="bloodPressure"
                                menu={[
                                    {
                                        nome: 'Sistólica de 100 a 119 mmHg',
                                        id: '1'
                                    },
                                    {
                                        nome: 'Sistólica de 120 a 139 mmHg',
                                        id: '2'
                                    },
                                    {
                                        nome: 'Sistólica de 140 a 159 mmHg',
                                        id: '3'
                                    },
                                    {
                                        nome: 'Sistólica de 160 a 179 mmHg',
                                        id: '4'
                                    },
                                    {
                                        nome: 'Sistólica de 180 a 199 mmHg',
                                        id: '6'
                                    },
                                    {
                                        nome: 'Sistólica de 200 mmHg ou mais',
                                        id: '8'
                                    },
                                ]}
                                disabled={false}
                                label="Pressão"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="familyHistory"
                                menu={[
                                    {
                                        nome: 'Nenhuma história conhecida de cardiopatia',
                                        id: '1'
                                    },
                                    {
                                        nome: '1 parente c/ doença cardiaca e mais de 60 anos',
                                        id: '2'
                                    },
                                    {
                                        nome: '2 parentes c/ doença cardiaca e mais de 60 anos',
                                        id: '3'
                                    },
                                    {
                                        nome: '1 parente c/ doença cardiaca e menos de 60 anos',
                                        id: '4'
                                    },
                                    {
                                        nome: '2 parentes c/ doença cardiaca e menos de 60 anos',
                                        id: '6'
                                    },
                                    {
                                        nome: '3 parentes c/ doença cardiaca e menos de 60 anos',
                                        id: '7'
                                    },
                                ]}
                                disabled={false}
                                label="Doenças na família"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextSelectCustom
                                fullWidth
                                name="cholesterol"
                                menu={[
                                    {
                                        nome: 'Abaixo de 180 ou a dieta não contém gorduras animais',
                                        id: '1'
                                    },
                                    {
                                        nome: 'De 181 a 205 ou a dieta contém 10% de gorduras animais',
                                        id: '2'
                                    },
                                    {
                                        nome: 'De 206 a 230 ou a dieta contém 20% de gorduras animais',
                                        id: '3'
                                    },
                                    {
                                        nome: 'De 231 a 255 ou a dieta contém 30% de gorduras animais',
                                        id: '4'
                                    },
                                    {
                                        nome: 'De 256 a 280 ou a dieta contém 40% de gorduras animais',
                                        id: '5'
                                    },
                                    {
                                        nome: 'Acima de 281 ou a dieta contém 50% de gorduras animais',
                                        id: '7'
                                    },
                                ]}
                                disabled={false}
                                label="Colesterol"
                            />
                        </Grid>

                    </Grid>
                </Box>
            </Form>

            <SectionTitle>Fatores de Risco</SectionTitle>
            {/* Adicione outras perguntas e respostas aqui */}
            <button onClick={save}>Calcular Risco</button>
            {
                riskLevel !== null && (
                    <>
                        <p>
                            Total: {riskScore}
                        </p>
                        <RiskLevel>
                            Risco: {riskLevel} - {RiskLevels[riskLevel]}
                        </RiskLevel>
                    </>
                )
            }
        </Container >
    );
};