import { Box, Container, Grid } from '@mui/material';
import React, {useState } from 'react';
import { IFormErrorsCustom, TextFieldCustom, useCustomForm } from '../../../components/forms';
import { Form } from "@unform/web";
import * as yup from 'yup';

export interface FormValues {
    cintura: string;
    quadril: string;
}

const formValidateSchema: yup.Schema<FormValues> = yup.object().shape({
    cintura: yup.string().required("Campo obrigatório"),
    quadril: yup.string().required("Campo obrigatório"),
})

export const CinturaQuadril: React.FC = () => {

    const [result, setResult] = useState(0)

    const { formRef, save } = useCustomForm();

    const handSave = (dados: FormValues) => {

        formValidateSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {
                const cinturaQuadril = parseFloat(dadosValidados.cintura) / (parseFloat(dadosValidados.quadril));

                setResult(parseFloat(cinturaQuadril.toFixed(2)))
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
    }
    return (
        <Container>

            <Form ref={formRef} onSubmit={(dados) => handSave(dados)}>
                <Box margin={1} display='flex' flexDirection='column' >
                    <Grid container direction='column' padding={2} spacing={2}>

                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Circunferência da cintura"
                                name="cintura"
                                disabled={false}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldCustom
                                fullWidth
                                label="Circunferência do quadril"
                                name="quadril"
                                disabled={false}
                            />
                        </Grid>

                    </Grid>
                </Box>
            </Form>

            <button onClick={save}>Calcular</button>

            <>
                <p>
                    A RELAÇÃO é de {result}.
                </p>
            </>


        </Container>
    );
};