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


const Food = () => {

  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [restricaoAlimentar, setRestricaoAlimentar] = useState('');
  const [alimentosFavoritos, setAlimentosFavoritos] = useState('');
  const [alimentosNaoGosta, setAlimentosNaoGosta] = useState('');
  const [nivelAtividade, setNivelAtividade] = useState('');


  const [loading, setLoading] = useState(false);
  const [resultText, setResultText] = useState('');

  const router = useRouter();


  const fetchData = async () => {

    const prompt = `
      Crie um plano alimentar de 7 dias para um usuário com as seguintes características:

      Objetivo: ${objetivo}
      Restrições Alimentares: ${restricaoAlimentar}
      Preferências Alimentares: ${alimentosFavoritos}
      Alimentos que não podem ter: ${alimentosNaoGosta}
      Nível de Atividade Física: ${nivelAtividade}
      Altura: ${altura}
      Peso: ${peso}
      Idade: ${idade}
      Sexo: ${sexo}
      
      O plano alimentar deve incluir:
      
      * Café da manhã, almoço, jantar e 2 lanches por dia.
      * Receitas simples e fáceis de preparar.
      * Opções variadas e saborosas que atendam às preferências do usuário.
      * Quantidades adequadas para o objetivo e nível de atividade física.
      * Considerar as restrições alimentares e alergias.
      
      Para cada refeição, inclua o nome da receita, ingredientes, modo de preparo e informações nutricionais (calorias, proteínas, carboidratos e gorduras).

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
        text='Responda as perguntas para montar sua dieta'
        fontWeight='bolder'
        textSize='two'
      />

      <form className="mt-14">
        <div className='grid grid-cols-3 space-x-4'>
          <div className='flex flex-col justify-start'>
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
                { value: 'Manutencao do peso', label: 'Manutenção do peso' },
                { value: 'Alimentar melhor', label: 'Alimentar melhor' },
              ]}
            />
          </div>
          <div>
            <Label text='Possui alguma restrição alimentar ?' textSize='medium' color='text-gray-500' />
            <Input
              type='text'
              withBackground={false}
              idName='restricaoAlimentar'
              value={restricaoAlimentar}
              onChange={(e) => setRestricaoAlimentar(e.target.value)}
              placeholder='alergia à amendoim, intolerancia a lactose...'
              className='mt-1'
            />
          </div>
          <div>
            <Label text='Qual alimento não pode faltar na dieta ?' textSize='medium' color='text-gray-500' />
            <Input
              type='text'
              withBackground={false}
              idName='alimentosFavoritos'
              value={alimentosFavoritos}
              onChange={(e) => setAlimentosFavoritos(e.target.value)}
              placeholder='pão francês, doce...'
              className='mt-1'
            />
          </div>
        </div>
        <div className='grid grid-cols-3 space-x-4 mt-6'>
          <div>
            <Label text='E os alimentos que você não gosta ?' textSize='medium' color='text-gray-500' />
            <Input
              type='text'
              withBackground={false}
              idName='alimentosNaoGosta'
              value={alimentosNaoGosta}
              onChange={(e) => setAlimentosNaoGosta(e.target.value)}
              placeholder='beterraba, abóbora...'
              className='mt-1'
            />
          </div>
          <div>
            <Label text='Você faz atividade física ?' textSize='medium' color='text-gray-500' />
            <Select
              idName='nivelAtividade'
              firstItem='Selecione...'
              valueFirstItem={''}
              withBackground={false}
              value={nivelAtividade}
              onChange={(e) => setNivelAtividade(e.target.value)}
              options={[
                { value: 'Sedentário', label: 'Sedentário' },
                { value: 'Levemente ativo', label: 'Levemente ativo' },
                { value: 'Moderadamente ativo', label: 'Moderadamente ativo' },
                { value: 'Muito ativo', label: 'Muito ativo' },
              ]}
            />
          </div>
          <div>
            <Label text='Qual sua altura (cálculo IMC) ?' textSize='medium' color='text-gray-500' />
            <Input
              type='text'
              withBackground={false}
              idName='altura'
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder='x,xx'
              className='mt-1'
            />
          </div>
          <div className='mt-6'>
            <Label text='Qual seu peso (cálculo IMC) ?' textSize='medium' color='text-gray-500' />
            <Input
              type='text'
              withBackground={false}
              idName='peso'
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder='xx kg'
              className='mt-1'
            />
          </div>
          <div className='mt-6'>
            <Label text='Qual sua idade (cálculo IMC) ?' textSize='medium' color='text-gray-500' />
            <Input
              type='text'
              withBackground={false}
              idName='idade'
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder='xx kg'
              className='mt-1'
            />
          </div>
          <div className='mt-6'>
            <Label text='Qual seu sexo (cálculo IMC) ?' textSize='medium' color='text-gray-500' />
            <Select
              idName='sexo'
              firstItem='Selecione...'
              valueFirstItem={''}
              withBackground={false}
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              options={[
                { value: 'Masculino', label: 'Masculino' },
                { value: 'Feminino', label: 'Feminino' },
              ]}
            />
          </div>
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
            label='Gerar Dieta'
            onClick={handleSubmit}
          />
        </div>
      </form>

      {loading ? (
        <div className='flex justify-center items-center'>
          <Loader />
          <br />
          <Label
            text='Gerando a dieta dos seus sonhos...'
            textSize='medium'
            color='block text-gray-500'
          />
        </div>
      ) : (

        resultText &&
        <Card backgroundColor='bg-gray-100 mt-5'>
          <div className='mt-4'>
            <DisplayResult text={resultText} foodFit='Dieta Personalizada' />
          </div>
        </Card>


      )}

    </Card>
  )
}

export default Food