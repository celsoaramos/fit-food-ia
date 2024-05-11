import React, { useState } from 'react'

import Card from '@/components/Atoms/Card'
import Input from '@/components/Atoms/Input'
import Label from '@/components/Atoms/Label'
import Select from '@/components/Atoms/Select'
import TextArea from '@/components/Atoms/TextArea'
import Button from '../Atoms/Button'
import { useRouter } from "next/router";
import Loader from '../Atoms/Loader'
import Link from 'next/link'
import getResponseGemini from '@/pages/api/genai'
import parse from 'html-react-parser'
import DisplayResult from '../Molecules/DisplayResult'


const Fit = () => {

  const [nivelExperiencia, setNivelExperiencia] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [localTreino, setLocalTreino] = useState('');
  const [limitacaoFisica, setLimitacaoFisica] = useState('');
  const [tempoTreino, setTempoTreino] = useState('');
  const [frequenciaTreino, setFrequenciaTreino] = useState('');
  const [tipoTreino, setTipoTreino] = useState('');

  
  const [loading, setLoading] = useState(false);
  const [resultText, setResultText] = useState('');

  const router = useRouter();

  
  const exerciseDisplay = (text: string) => {
    // Separa os exercícios do texto
    const exercises = text.split('\n\n').filter(exercise => exercise.trim() !== '');
  
    return exercises
    
  };


  const fetchData = async () => {

    const prompt = `
      Crie uma série de exercícios com até 10 exercícios para um usuário de acordo com o seu nível de experiência, objetivo, equipamentos disponíveis, limitações físicas e preferências de treino.
      
      Alguns parâmetros para essa série de exercícios são:
      Nível de experiência: ${nivelExperiencia} 
      Com foco em ${objetivo}. 
      O usuário possui vai treinar ${localTreino}. 
      Tempo de treino: ${tempoTreino}
      Frequência de treino por semana: ${frequenciaTreino}
      Tipo de treino: ${tipoTreino}
      
      Para cada exercício, inclua o nome, descrição detalhada da execução, número de séries e repetições (sugira valores adequados para o ${nivelExperiencia}), 
      equipamentos necessários (se houver), duração aproximada (por exemplo, '30 segundos', '1 minuto'), e um link para uma imagem ou GIF demonstrando o exercício.
      
      A série deve incluir exercícios de ${tipoTreino}.

      O retorno não pode incluir caracteres especiais ou * ou / por exemplo

      **Formato da Resposta:** Texto simples
    `

    fetch(`/api/genai`, {
      method: 'POST', // Definindo o método como POST
      headers: {
        'Content-Type': 'application/json', // Definindo o cabeçalho Content-Type como application/json
        'Accept': 'application/json',
      },
      body: JSON.stringify({ prompt }), // Convertendo o objeto prompt em uma string JSON
    })
      .then((response) => response.json()) // Convertendo a resposta para JSON
      .then((data) => {
        setResultText(data.text);
        setLoading(false);
      })
      .catch((err) => console.error('Erro ao fazer a solicitação:', err))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  const backIndex = () => {
    router.push('/');
  }

  return (
    <Card backgroundColor='bg-white'>
      <Label
        color='text-gray-700'
        text='Responda as perguntas para montar sua série da academia'
        fontWeight='bolder'
        textSize='two'
      />

      <form className="mt-14">
        <div className='grid grid-cols-3 space-x-4'>
          <div className='flex flex-col justify-start'>
            <Label text='Seu nível de experiência ?' textSize='medium' color='text-gray-500' />
            <Select
              idName='nivelExperiencia'
              firstItem='Selecione...'
              valueFirstItem={''}
              withBackground={false}
              value={nivelExperiencia}
              onChange={(e) => setNivelExperiencia(e.target.value)}
              options={[
                { value: 'Basico', label: 'Básico' },
                { value: 'Intermediario', label: 'Intermediário' },
                { value: 'Avançado', label: 'Avançado' },
              ]}
            />
          </div>
          <div>
            <Label text='Qual o seu objetivo ?' textSize='medium' color='text-gray-500' />
            <Select
              idName='objetivo'
              firstItem='Selecione...'
              valueFirstItem={''}
              withBackground={false}
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              options={[
                { value: 'Emagrecimento', label: 'Emagrecimento' },
                { value: 'Ganho de Massa', label: 'Ganho de Massa' },
                { value: 'Definicao', label: 'Definição' },
              ]}
            />
          </div>
          <div>
            <Label text='Qual vai ser o público alvo?' textSize='medium' color='text-gray-500' />
            <Select
              idName='localTreino'
              firstItem='Selecione...'
              valueFirstItem={''}
              withBackground={false}
              value={localTreino}
              onChange={(e) => setLocalTreino(e.target.value)}
              options={[
                { value: 'Casa', label: 'Casa' },
                { value: 'Academia', label: 'Academia' },
              ]}
            />
          </div>
        </div>
        <div className='grid grid-cols-3 space-x-4 mt-6'>
        <div>
            <Label text='Tempo para treinar' textSize='medium' color='text-gray-500' />
            <Input
              type='text'
              withBackground={false}
              idName='tempoTreino'
              value={tempoTreino}
              onChange={(e) => setTempoTreino(e.target.value)}
              placeholder='40 min, 60 min'
              className='mt-1'
            />
          </div>
          <div>
            <Label text='Frequência de treino por semana ?' textSize='medium' color='text-gray-500' />
            <Select
              idName='frequenciaTreino'
              firstItem='Selecione...'
              valueFirstItem={''}
              withBackground={false}
              value={frequenciaTreino}
              onChange={(e) => setFrequenciaTreino(e.target.value)}
              options={[
                { value: 'Duas vezes', label: 'Duas vezes' },
                { value: 'Tres vezes', label: 'Tres vezes' },
                { value: 'Quatro vezes', label: 'Quatro vezes' },
                { value: 'Cinco+ vezes', label: 'Cinco+ vezes' },
              ]}
            />
          </div>
          <div>
            <Label text='Musculação ou cardio ou os dois ?' textSize='medium' color='text-gray-500' />
            <Select
              idName='tipoTreino'
              firstItem='Selecione...'
              valueFirstItem={''}
              withBackground={false}
              value={tipoTreino}
              onChange={(e) => setTipoTreino(e.target.value)}
              options={[
                { value: 'Muscualcao', label: 'Muscualcao' },
                { value: 'Cardio', label: 'Cardio' },
                { value: 'Musculacao e Cardio', label: 'Musculacao e Cardio' },
              ]}
            />
          </div>
        </div>

        <div className='mt-6'>
          <Label text='Possui alguma lesão ou algo a relatar ?' textSize='medium' color='text-gray-500' />
          <TextArea
            idName='limitacaoFisica'
            value={limitacaoFisica}
            onChange={(e) => setLimitacaoFisica(e.target.value)}
            placeholder=''
            withBackground={false}
          />
        </div>

        <div className='flex flex-row justify-beetween mt-6'>
          <Link
            href='/'
            className='block w-full max-w-xs mx-auto bg-gray-500 hover:bg-gray-700 text-white font-bold px-3 py-3 rounded-lg'
          >
            <Button
              type='cancel'
              label='Voltar'
              onClick={backIndex}
            />
          </Link>
          <Button
            type='ideiaProjeto'
            label='Gerar Série'
            onClick={handleSubmit}
          />
        </div>
      </form>

      {loading ? (
        <div className='flex justify-center items-center'>
          <Loader />
          <br />
          <Label
            text='Gerando a série que vai mudar sua vida...'
            textSize='medium'
            color='block text-gray-500'
          />
        </div>
      ) : (

        resultText &&
        <Card backgroundColor='bg-gray-100 mt-5'>
          <div className='mt-4'>
            <DisplayResult text={resultText} foodFit='Sua série fabulosa !' />
          </div>
        </Card>


      )}

    </Card>
  )
}

export default Fit