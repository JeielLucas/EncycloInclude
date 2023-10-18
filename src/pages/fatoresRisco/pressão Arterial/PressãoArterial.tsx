import { Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { AnswerSelect, Question, QuestionText, SectionTitle } from './style';



export const PressãoArterial: React.FC = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [etnia, setEtnia] = useState('');
    const [estatura, setEstatura] = useState('');
    const [peso, setPeso] = useState('');
    const [fcRepouso, setFcRepouso] = useState('');
    const [nivelCondicionamento, setNivelCondicionamento] = useState('');
    const [dataAfericao, setDataAfericao] = useState('');
    const [medicamento, setMedicamento] = useState('');
    const [resultadoAfericao, setResultadoAfericao] = useState('');
    const [ingeriuEstimulantes, setIngeriuEstimulantes] = useState('');
    const [estressado, setEstressado] = useState('');
    const [fumouUltimos30Min, setFumouUltimos30Min] = useState('');
    const [problemasSono, setProblemasSono] = useState('');
    const [comeuUltimos30Min, setComeuUltimos30Min] = useState('');
    const [atividadeFisicaUltimos30Min, setAtividadeFisicaUltimos30Min] = useState('');
    const [sistolica, setSistolica] = useState('');
    const [diastolica, setDiastolica] = useState('');

    // const [resultpaMedia, setResultPaMedia] = useState('');
    const [resultSistolica, setResultSistolica] = useState('');
    const [resultDiastolica, setResultDiastolica] = useState('');
    const [resultReavaliacaoS, setResultReavaliacaoS] = useState(0);
    const [resultReavaliacaoD, setResultReavaliacaoD] = useState(0);
    const [resultReavaliacao, setResultReavaliacao] = useState('');
    const [aux, setAux] = useState('');


    const reavaliacao: { [key: number]: string } = {
        1: 'REAVALIAR EM 01 ANO',
        2: 'REAVALIAR EM 06 MESES',
        3: 'A CADA 02 MESES',
        4: 'A CADA 01 MÊS',
        5: 'IMEDIATO',
        6: 'A CADA 02 MESES'
    }
    const calculateDiagnostico = () => {

        if (ingeriuEstimulantes === '1') {
            alert('A ingestão de café, álcool ou estimulantes 30 minutos antes da aferição pode alterar seu resultado, refaça a aferição.')
        }
        if (estressado === '1') {
            alert('O estresse pode alterar a PA, tente aferir quando a pessoa estiver mais calma.')
        }
        if (fumouUltimos30Min === '1') {
            alert('Afira novamente após 30 minutos do último cigarro.')
        }
        if (problemasSono === '1') {
            alert('Afira novamente após uma boa noite de sono, se o problema persistir procure um especialista.')
        }
        if (comeuUltimos30Min === '1') {
            alert('Afira novamente após 30 minutos da última refeição.')
        }
        if (atividadeFisicaUltimos30Min === '1') {
            alert('Afira novamente após 30 minutos da prática de atividade física.')
        }


        if (parseInt(sistolica) < 130) {
            setResultSistolica('Normal');
            setResultReavaliacaoS(1)
        } else if (parseInt(sistolica) >= 130 && parseInt(sistolica) < 140) {
            setResultSistolica('Normal - Limítrofe');
            setResultReavaliacaoS(2)
        } else if (parseInt(sistolica) >= 140 && parseInt(sistolica) < 160) {
            setResultSistolica('Hipertensão leve');
            setResultReavaliacaoS(3)
        } else if (parseInt(sistolica) >= 160 && parseInt(sistolica) < 180) {
            setResultSistolica('Hipertensão moderada');
            setResultReavaliacaoS(4)
        } else if (parseInt(sistolica) >= 180 && parseInt(sistolica) < 210) {
            setResultSistolica('Hipertensão grave');
            setResultReavaliacaoS(5)
        } else if (parseInt(sistolica) >= 210) {
            setResultSistolica('Hipertensão muito grave');
            setResultReavaliacaoS(6)
        } else {
            setResultSistolica('Valores fora do padrão');
        }

        if (parseInt(diastolica) < 85) {
            setResultDiastolica('Normal');
            setResultReavaliacaoD(1)
        } else if (parseInt(diastolica) >= 85 && parseInt(diastolica) < 90) {
            setResultDiastolica('Normal - Limítrofe');
            setResultReavaliacaoD(2)
        } else if (parseInt(diastolica) >= 90 && parseInt(diastolica) < 100) {
            setResultDiastolica('Hipertensão leve');
            setResultReavaliacaoD(3)
        } else if (parseInt(diastolica) >= 100 && parseInt(diastolica) < 120) {
            setResultDiastolica('Hipertensão moderada');
            setResultReavaliacaoD(4)
        } else if (parseInt(diastolica) >= 110 && parseInt(diastolica) < 120) {
            setResultDiastolica('Hipertensão grave');
            setResultReavaliacaoD(5)
        } else if (parseInt(diastolica) >= 120) {
            setResultDiastolica('Hipertensão muito grave');
            setResultReavaliacaoD(6)
        } else {
            setResultDiastolica('Valores fora do padrão');
        }

        if (resultReavaliacaoS >= resultReavaliacaoD) {
            setResultReavaliacao(reavaliacao[resultReavaliacaoS]);
        } else {
            setResultReavaliacao( reavaliacao[resultReavaliacaoD]);
        }
        //isso aqui é so  uma gambiarra kkk
        setAux(resultReavaliacao) 
        if(aux) setAux('-')


    }

    return (
        <Container>
            <h1>AFERIÇÃO DA PRESSÃO ARTERIAL</h1>
            <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                value={nome}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setNome(event.target.value);
                }}
            />
            <TextField
                id="outlined-basic"
                label="Idade"
                variant="outlined"
                value={idade}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setIdade(event.target.value);
                }}
            />
            <TextField
                id="outlined-basic"
                label="Peso"
                variant="outlined"
                value={peso}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPeso(event.target.value);
                }}
            />

            <Question>
                <QuestionText>Etnia:</QuestionText>
                <AnswerSelect aria-label='Etnia' value={etnia} onChange={(e) => setEtnia(e.target.value)}>
                    <option disabled value="0">Selecione uma opção</option>
                    <option value="1">Mestiço</option>
                    <option value="2">Branco</option>
                    <option value="3">Negro</option>
                    <option value="5">Oriental</option>
                    <option value="6">Indio</option>
                    <option value="8">Espánico</option>
                </AnswerSelect>
            </Question>

            <TextField
                id="outlined-basic"
                label="Estatura"
                variant="outlined"
                value={estatura}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEstatura(event.target.value);
                }}
            />
            <TextField
                id="outlined-basic"
                label="F.C. de Repouso"
                variant="outlined"
                value={fcRepouso}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFcRepouso(event.target.value);
                }}
            />
            <TextField
                id="outlined-basic"
                label="Nível de Condicionamento"
                variant="outlined"
                value={nivelCondicionamento}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setNivelCondicionamento(event.target.value);
                }}
            />


            <input id="date" type="date" style={{ height: '55px' }}
                value={dataAfericao}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setDataAfericao(event.target.value);
                }}
            />

            <TextField
                id="outlined-basic"
                label="Estatura"
                variant="outlined"
                value={medicamento}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setMedicamento(event.target.value);
                }}
            />

            <TextField
                id="outlined-basic"
                label="Qual o resultado da última aferição?"
                variant="outlined"
                value={resultadoAfericao}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setResultadoAfericao(event.target.value);
                }}
            />

            <Question>
                <QuestionText>Ingeriu café, álcool ou estimulantes nos últimos 30 minutos?</QuestionText>
                <AnswerSelect value={ingeriuEstimulantes} onChange={(e) => setIngeriuEstimulantes(e.target.value)}>
                    <option disabled value="">Selecione uma opção</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Você está estressado?</QuestionText>
                <AnswerSelect value={estressado} onChange={(e) => setEstressado(e.target.value)}>
                    <option disabled value="">Selecione uma opção</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Você fumou nos últimos 30 minutos?</QuestionText>
                <AnswerSelect value={fumouUltimos30Min} onChange={(e) => setFumouUltimos30Min(e.target.value)}>
                    <option disabled value="">Selecione uma opção</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Você fumou nos últimos 30 minutos?</QuestionText>
                <AnswerSelect value={problemasSono} onChange={(e) => setProblemasSono(e.target.value)}>
                    <option disabled value="">Selecione uma opção</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Você fumou nos últimos 30 minutos?</QuestionText>
                <AnswerSelect value={comeuUltimos30Min} onChange={(e) => setComeuUltimos30Min(e.target.value)}>
                    <option disabled value="">Selecione uma opção</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Você fumou nos últimos 30 minutos?</QuestionText>
                <AnswerSelect value={atividadeFisicaUltimos30Min} onChange={(e) => setAtividadeFisicaUltimos30Min(e.target.value)}>
                    <option disabled value="">Selecione uma opção</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </AnswerSelect>
            </Question>

            <TextField
                id="outlined-basic"
                label="SISTÓLICA"
                variant="outlined"
                value={sistolica}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSistolica(event.target.value);
                }}
            />

            <TextField
                id="outlined-basic"
                label="SISTÓLICA"
                variant="outlined"
                value={diastolica}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setDiastolica(event.target.value);
                }}
            />


            <SectionTitle>De acordo com a classificação proposta pelo III Consenso Brasileiro de Hipertensão Arterial, sua Pressão Arteria é:</SectionTitle>
            {/* Adicione outras perguntas e respostas aqui */}
            <button onClick={calculateDiagnostico}>Diagnosticar</button>

            <>
                <p>
                    {/* P.A. MÉDIA: {riskScore} */}
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