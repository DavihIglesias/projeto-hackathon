import { keyframes } from "styled-components";
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const animacaoTexto = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;
const TextoQuiz = styled.h2`
  font-size: 1.8rem;
  color: #ffa500;
  font-family: 'Spicy Rice', serif;
  animation: ${animacaoTexto} 2s infinite;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
const BotaoVoltar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  &:hover {
    background: #0056b3;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    @media (max-width: 768px) {
    body {
      padding: 10px;
    }
  }
`;

// Estilos
const Container = styled.div`
  text-align: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a6a, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Spicy Rice', serif;
  letter-spacing: 0.2em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

const Pergunta = styled.p`
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Opcoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Opcao = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.selecionado ? "#d1e7dd" : "#ffffff")};
  color: ${(props) => (props.selecionado ? "#0f5132" : "#000000")};
  &:hover {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const BotaoFinalizar = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 1.2rem;
  color: white;
  background: linear-gradient(90deg, #00c9ff, #92fe9d);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  animation: pulsar 2s infinite;
  @keyframes pulsar {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 18px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const MensagemErro = styled.p`
  color: #e74c3c;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;


const Quiz = () => {
  const perguntas = [
    {
      texto: " 1. Qual ODS trata de igualdade de gênero?",
      opcoes: ["ODS 3", "ODS 5", "ODS 10", "ODS 7"],
      respostaCorreta: [1],
    },
    {
      texto: " 2. Qual ODS fala sobre energia limpa?",
      opcoes: ["ODS 4", "ODS 7", "ODS 13", "ODS 15"],
      respostaCorreta: [1],
    },
    {
      texto: " 3. A ODS 14 trata sobre:",
      opcoes: ["Água potável", "Vida na água", "Mudanças climáticas", "Desigualdade"],
      respostaCorreta: [1],
    },
    {
      texto: "4. Quais ODS tratam de água e saneamento?",
      opcoes: ["ODS 6 ", "ODS 14", "ODS 10", "ODS 8"],
      respostaCorreta: [0, 1], 
      multipla: true,
    },
    {
      texto: "Qual ODS trata de trabalho decente e crescimento econômico?",
      opcoes: ["ODS 8", "ODS 2", "ODS 11", "ODS 9"],
      respostaCorreta: [0],
    },
  ];

  const titulosODS = [
    "ODS 1 - Erradicação da Pobreza",
    "ODS 2 - Fome Zero e Agricultura Sustentável",
    "ODS 3 - Saúde e Bem-Estar",
    "ODS 5 - Igualdade de Gênero",
    "ODS 6 - Água Potável e Saneamento",
    "ODS 7 - Energia Acessível e Limpa",
    "ODS 8 - Trabalho Decente e Crescimento Econômico",
    "ODS 10 - Redução das Desigualdades",
    "ODS 13 - Ação contra a Mudança Global do Clima",
    "ODS 14 - Vida na Água",
    "ODS 15 - Vida Terrestre",
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostasSelecionadas, setRespostasSelecionadas] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);


  const handleVoltarInicio = () => {
    window.location.href = "/";
  };

  const handleOpcaoClick = (indice) => {
    const novaSelecao = [...respostasSelecionadas];
    novaSelecao[indiceAtual] = novaSelecao[indiceAtual] || [];
    if (perguntas[indiceAtual].multipla) {
      if (novaSelecao[indiceAtual].includes(indice)) {
        novaSelecao[indiceAtual] = novaSelecao[indiceAtual].filter((item) => item !== indice);
      } else {
        novaSelecao[indiceAtual].push(indice);
      }
    } else {
      novaSelecao[indiceAtual] = [indice];
    }
    setRespostasSelecionadas(novaSelecao);
  };

  const handleProximaPergunta = () => {
    if (indiceAtual < perguntas.length - 1) {
      setIndiceAtual(indiceAtual + 1);
    } else {
      setModalAberto(true);
    }
  };

  const calcularPontuacao = () => {
    let corretas = 0;
    perguntas.forEach((pergunta, index) => {
      if (
        JSON.stringify(pergunta.respostaCorreta.sort()) ===
        JSON.stringify(respostasSelecionadas[index]?.sort())
      ) {
        corretas++;
      }
    });
    return corretas;
  };

  const totalCorretas = calcularPontuacao();
  const totalErradas = perguntas.length - totalCorretas;

  const estudarODS = perguntas
    .map((pergunta, index) =>
      respostasSelecionadas[index]?.sort().join() !== pergunta.respostaCorreta.sort().join()
        ? titulosODS.filter((titulo) =>
            pergunta.opcoes.some((opcao, i) => i === pergunta.respostaCorreta[0] && titulo.includes(opcao))
          )[0]
        : null
    )
    .filter(Boolean);

  return (
    <>
      <GlobalStyle />
      <BotaoVoltar onClick={handleVoltarInicio}>Voltar para a página de início</BotaoVoltar>
      <Container>
      <TextoQuiz>Quiz</TextoQuiz>
        <Titulo>Objetivo de Desenvolvimento Sustentável</Titulo>
        <Pergunta>
          {perguntas[indiceAtual].texto}
          {perguntas[indiceAtual].multipla && (
            <span style={{ color: "#e67e22" }}> (Essa pergunta tem mais de uma resposta correta)</span>
          )}
        </Pergunta>
        <Opcoes>
          {perguntas[indiceAtual].opcoes.map((opcao, i) => (
            <Opcao
              key={i}
              selecionado={respostasSelecionadas[indiceAtual]?.includes(i)}
              onClick={() => handleOpcaoClick(i)}
            >
              {opcao}
            </Opcao>
          ))}
        </Opcoes>
        <BotaoFinalizar onClick={handleProximaPergunta}>
          {indiceAtual < perguntas.length - 1 ? "Próxima Pergunta" : "Ver minhas pontuações"}
        </BotaoFinalizar>
      </Container>

      {modalAberto && (
        <Modal>
          <ModalContent>
            <h2>Resultados</h2>
            <p>Você acertou: {totalCorretas}</p>
            <p>Você errou: {totalErradas}</p>
            {totalErradas > 0 && (
              <MensagemErro>
                Você precisa estudar mais sobre:
                <ul>
                  {estudarODS.map((ods, i) => (
                    <li key={i}>{ods}</li>
                  ))}
                </ul>
              </MensagemErro>
            )}
            <BotaoFinalizar onClick={() => window.location.reload()}>Tentar novamente</BotaoFinalizar>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Quiz;
