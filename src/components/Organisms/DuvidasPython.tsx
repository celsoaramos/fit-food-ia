import React, { useState } from 'react'

import Card from '@/components/Atoms/Card'
import Input from '@/components/Atoms/Input'
import Label from '@/components/Atoms/Label'
import Button from '../Atoms/Button'
import { useRouter } from "next/router";
import Loader from '../Atoms/Loader'
import Link from 'next/link'

interface DuvidasPython {
  Objetivo: string
  Tecnologias: string
  StatusdeDesenvolvimento: string[]
  Contribuicao: string[]
  ProjetosSimilares: string[]
  Resultado: string
}

const DuvidasPython = () => {

  const [duvidaPython, setDuvidaPython] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultText, setResultText] = useState('');

  const router = useRouter();


  const fetchData = async () => {

    const prompt = `
    **Pergunta do Usuário:** ${duvidaPython}

    **Base de Conhecimento:** 
    {
      [
        {
          "pergunta": "O que é Python?",
          "resposta": "Python é uma linguagem de programação de alto nível, interpretada, de propósito geral e fácil de aprender."
        },
        {
          "pergunta": "Quais são as principais características do Python?",
          "resposta": "Algumas das principais características do Python incluem sintaxe simples e legível, tipagem dinâmica, suporte para programação orientada a objetos, modularidade, extensibilidade, portabilidade e uma grande biblioteca padrão."
        },
        {
          "pergunta": "Como instalar o Python?",
          "resposta": "Você pode baixar o instalador do Python no site oficial (https://www.python.org) e seguir as instruções de instalação para o seu sistema operacional."
        },
        {
          "pergunta": "Qual é a diferença entre Python 2 e Python 3?",
          "resposta": "Python 2 e Python 3 são versões diferentes da linguagem Python. Python 3 é a versão mais recente e possui várias melhorias e correções de design em relação ao Python 2. Python 2 não recebe mais suporte desde 2020 e é recomendado usar Python 3 para novos projetos."
        },
        {
          "pergunta": "O que é PEP 8?",
          "resposta": "PEP 8 é um guia de estilo para código Python que define recomendações sobre a formatação do código, como espaçamento, indentação, nomes de variáveis e outras convenções de codificação."
        },
        {
          "pergunta": "Quais são os tipos de dados básicos em Python?",
          "resposta": "Alguns dos tipos de dados básicos em Python incluem inteiros (int), números de ponto flutuante (float), strings (str), booleanos (bool) e listas (list)."
        },
        {
          "pergunta": "O que são listas em Python?",
          "resposta": "Uma lista em Python é uma coleção ordenada de itens que podem ser de diferentes tipos. As listas são mutáveis, o que significa que você pode adicionar, remover e modificar itens nelas."
        },
        {
          "pergunta": "Como declarar uma função em Python?",
          "resposta": "Você pode declarar uma função em Python usando a palavra-chave 'def', seguida pelo nome da função e os parâmetros entre parênteses. Por exemplo: 'def minha_funcao(parametro1, parametro2):'."
        },
        {
          "pergunta": "O que é indentação em Python?",
          "resposta": "Indentação em Python é a prática de usar espaços ou tabulações no início de uma linha para definir o bloco de código. A indentação é usada para delimitar blocos de código em vez de chaves, como em outras linguagens de programação."
        },
        {
          "pergunta": "Como ler entrada do usuário em Python?",
          "resposta": "Você pode ler entrada do usuário em Python usando a função 'input()', que aguarda o usuário digitar algo no terminal e retorna a entrada como uma string."
        },
        {
          "pergunta": "O que são módulos em Python?",
          "resposta": "Módulos em Python são arquivos que contêm definições de funções, classes e variáveis que podem ser reutilizadas em outros programas. Você pode importar módulos em seu código usando a instrução 'import'."
        },
        {
          "pergunta": "O que é uma exceção em Python?",
          "resposta": "Uma exceção em Python é um evento que ocorre durante a execução de um programa que interrompe o fluxo normal de execução. As exceções podem ser tratadas usando blocos 'try', 'except' e 'finally'."
        },
        {
          "pergunta": "Como lidar com exceções em Python?",
          "resposta": "Você pode lidar com exceções em Python usando blocos 'try', 'except' e 'finally'. O código que pode gerar uma exceção é colocado dentro do bloco 'try', e qualquer código de tratamento é colocado dentro do bloco 'except'. O bloco 'finally' é opcional e é usado para código que deve ser executado, independentemente de ocorrer uma exceção ou não."
        },
        {
          "pergunta": "O que são expressões lambda em Python?",
          "resposta": "Expressões lambda em Python são funções anônimas de uma linha que podem ter qualquer número de argumentos, mas só podem ter uma expressão. Elas são usadas principalmente como argumentos para funções de ordem superior, como 'map()', 'filter()' e 'sorted()'."
        },
        {
          "pergunta": "O que é a função map() em Python?",
          "resposta": "A função 'map()' em Python aplica uma função a cada item de um iterável (como uma lista) e retorna um iterador que contém os resultados."
        },
        {
          "pergunta": "O que é a função filter() em Python?",
          "resposta": "A função 'filter()' em Python cria um iterador que filtra os elementos de um iterável (como uma lista) com base em uma função de filtro fornecida."
        },
        {
          "pergunta": "O que são list comprehensions em Python?",
          "resposta": "List comprehensions em Python são uma maneira concisa de criar listas. Elas permitem que você crie listas usando uma única linha de código, substituindo loops 'for' tradicionais."
        },
        {
          "pergunta": "O que é o operador 'in' em Python?",
          "resposta": "O operador 'in' em Python é usado para verificar se um valor está presente em uma sequência (como uma lista, tupla ou string). Ele retorna True se o valor estiver presente e False caso contrário."
        },
        {
          "pergunta": "O que são dicionários em Python?",
          "resposta": "Dicionários em Python são coleções não ordenadas de pares chave-valor. Eles são mutáveis, o que significa que você pode adicionar, remover e modificar itens neles."
        },
        {
          "pergunta": "O que é a função zip() em Python?",
          "resposta": "A função 'zip()' em Python combina duas ou mais iteráveis (como listas, tuplas ou strings) em um iterador que retorna tuplas contendo elementos correspondentes de cada iterável."
        },
        {
          "pergunta": "O que é a recursão em Python?",
          "resposta": "Recursão em Python é o processo de uma função chamando a si mesma. Isso permite que funções resolvam problemas repetindo uma tarefa em partes menores."
        },
        {
          "pergunta": "O que é a biblioteca padrão de Python?",
          "resposta": "A biblioteca padrão de Python é uma coleção de módulos e pacotes que fornecem funcionalidades úteis para uma variedade de tarefas, como manipulação de arquivos, processamento de strings, networking, matemática, data e hora, entre outros."
        },
        {
          "pergunta": "O que são virtualenvs em Python?",
          "resposta": "Virtualenvs em Python são ambientes virtuais isolados que permitem que você instale e gerencie pacotes Python de forma independente de outros projetos. Isso é útil para manter as dependências de cada projeto separadas e evitar conflitos."
        },
        {
          "pergunta": "Como usar o operador ternário em Python?",
          "resposta": "Em Python, você pode usar a sintaxe 'valor_se_verdadeiro if condição else valor_se_falso' para criar uma expressão ternária. Por exemplo: 'resultado = 'par' if numero % 2 == 0 else 'ímpar''."
        },
        {
          "pergunta": "O que são decoradores em Python?",
          "resposta": "Decoradores em Python são uma forma de modificar ou estender o comportamento de funções ou métodos existentes sem modificar seu código subjacente. Eles permitem adicionar funcionalidades como logging, caching, validação de entrada, entre outros."
        },
        {
          "pergunta": "O que é o Python Package Index (PyPI)?",
          "resposta": "O Python Package Index (PyPI) é um repositório de software para a linguagem de programação Python. Ele contém uma vasta gama de pacotes e bibliotecas Python que podem ser instalados usando o instalador de pacotes 'pip'."
        },
        {
          "pergunta": "O que é o pip em Python?",
          "resposta": "O pip é um sistema de gerenciamento de pacotes usado para instalar e gerenciar pacotes Python. Ele é usado para instalar pacotes do Python Package Index (PyPI) e outros repositórios."
        },
        {
          "pergunta": "O que é um iterador em Python?",
          "resposta": "Um iterador em Python é um objeto que representa uma sequência de elementos. Ele permite que você itere sobre os elementos dessa sequência usando um loop 'for' ou consuma os elementos usando o método 'next()'."
        },
        {
          "pergunta": "Qual é a diferença entre '==' e 'is' em Python?",
          "resposta": "O operador '==' em Python é usado para verificar se dois valores são iguais em termos de conteúdo, enquanto o operador 'is' é usado para verificar se dois valores são idênticos em termos de identidade de objeto."
        },
        {
          "pergunta": "O que é o Python's pass statement?",
          "resposta": "A instrução 'pass' em Python é usada como um espaço reservado onde nenhuma ação é executada. Ela é frequentemente usada como um marcador de espaço em partes do código que ainda estão sendo desenvolvidas ou em loops ou funções vazios que não fazem nada."
        },
        {
          "pergunta": "O que são métodos mágicos em Python?",
          "resposta": "Métodos mágicos em Python são métodos especiais com nomes que começam e terminam com dois sublinhados (dunder). Eles permitem que você adicione comportamentos especiais a objetos, como operadores aritméticos, comparação, iteração, entre outros."
        },
        {
          "pergunta": "Como verificar se uma chave existe em um dicionário em Python?",
          "resposta": "Você pode usar a palavra-chave 'in' para verificar se uma chave existe em um dicionário. Por exemplo: 'if chave in meu_dicionario:'."
        },
        {
          "pergunta": "O que é o método join() em Python?",
          "resposta": "O método 'join()' em Python é usado para concatenar uma sequência de strings usando um separador específico. Ele cria uma nova string contendo os elementos da sequência separados pelo separador especificado."
        },
        {
          "pergunta": "O que é a expressão assert em Python?",
          "resposta": "A expressão 'assert' em Python é usada para verificar se uma condição é verdadeira. Se a condição for falsa, ela gera uma exceção AssertionError."
        },
        {
          "pergunta": "Como abrir e fechar arquivos em Python?",
          "resposta": "Você pode abrir arquivos em Python usando a função 'open()' e fechá-los usando o método 'close()'. Por exemplo: 'arquivo = open('nome_arquivo.txt', 'r')' para abrir um arquivo para leitura."
        },
        {
          "pergunta": "O que é a declaração break em Python?",
          "resposta": "A declaração 'break' em Python é usada para interromper a execução de loops 'for' e 'while' antes de serem concluídos. Ela é usada para sair prematuramente de um loop quando uma condição específica é atendida."
        },
        {
          "pergunta": "O que é a declaração continue em Python?",
          "resposta": "A declaração 'continue' em Python é usada para pular para a próxima iteração de um loop 'for' ou 'while', ignorando qualquer código restante dentro do bloco do loop. Ela é usada para continuar com a próxima iteração sem executar o código restante."
        },
        {
          "pergunta": "O que é o Python's None?",
          "resposta": "None é um valor especial em Python que representa a ausência de valor ou a falta de qualquer valor significativo. Ele é frequentemente usado para indicar que uma variável não foi inicializada ou para representar a ausência de um valor em funções que não retornam nada."
        },
        {
          "pergunta": "Como definir uma classe em Python?",
          "resposta": "Você pode definir uma classe em Python usando a palavra-chave 'class', seguida pelo nome da classe e opcionalmente uma lista de classes base entre parênteses. Por exemplo: 'class MinhaClasse:'."
        },
        {
          "pergunta": "O que são métodos de classe em Python?",
          "resposta": "Métodos de classe em Python são métodos que são chamados na classe em vez de em instâncias individuais da classe. Eles podem ser chamados usando a sintaxe 'MinhaClasse.metodo()' em vez de 'objeto.metodo()'."
        },
        {
          "pergunta": "O que é a compreensão de conjunto em Python?",
          "resposta": "A compreensão de conjunto em Python é uma maneira concisa de criar conjuntos. Ela permite que você crie conjuntos usando uma única linha de código, substituindo loops 'for' tradicionais."
        },
        {
          "pergunta": "Como usar o módulo random em Python?",
          "resposta": "O módulo 'random' em Python fornece funções para gerar números aleatórios. Você pode usar as funções 'random()', 'randint()', 'choice()', 'shuffle()', entre outras, para gerar números aleatórios ou selecionar elementos aleatórios de uma sequência."
        },
        {
          "pergunta": "O que é a instrução del em Python?",
          "resposta": "A instrução 'del' em Python é usada para remover um objeto, variável ou item de uma lista de memória. Ela pode ser usada para remover variáveis, elementos de uma lista, atributos de objetos e até mesmo objetos inteiros."
        },
        {
          "pergunta": "O que é a função range() em Python?",
          "resposta": "A função 'range()' em Python cria uma sequência de números inteiros em uma faixa especificada. Ela é comumente usada em loops 'for' para iterar sobre uma sequência de números."
        },
        {
          "pergunta": "O que é a instrução pass em Python?",
          "resposta": "A instrução 'pass' em Python é usada como um espaço reservado onde nenhuma ação é executada. Ela é frequentemente usada como um marcador de espaço em partes do código que ainda estão sendo desenvolvidas ou em loops ou funções vazios que não fazem nada."
        },
        {
          "pergunta": "Como converter uma string para um número em Python?",
          "resposta": "Você pode converter uma string para um número em Python usando as funções 'int()', 'float()' ou 'eval()'. Por exemplo: 'numero = int('123')' para converter a string '123' em um inteiro."
        },
        {
          "pergunta": "O que são iteradores e iteráveis em Python?",
          "resposta": "Em Python, um iterável é qualquer objeto que pode ser iterado sobre, como uma lista, tupla ou string. Um iterador é um objeto que permite que você itere sobre um iterável, fornecendo métodos como 'next()' para obter os próximos elementos do iterável."
        },
        {
          "pergunta": "O que são geradores em Python?",
          "resposta": "Geradores em Python são uma maneira simples e poderosa de criar iteradores. Eles são funções que contêm uma ou mais instruções 'yield' e retornam um objeto gerador que pode ser iterado sobre usando um loop 'for'."
        },
        {
          "pergunta": "O que é o módulo os em Python?",
          "resposta": "O módulo 'os' em Python fornece funções para interagir com o sistema operacional subjacente, como manipulação de arquivos, execução de comandos do sistema, manipulação de diretórios, entre outras."
        },
        {
          "pergunta": "O que é o método format() em Python?",
          "resposta": "O método 'format()' em Python é usado para formatar strings. Ele permite inserir valores de variáveis em uma string formatada usando marcadores de posição e especificadores de formato."
        },
        {
          "pergunta": "O que é a PEP 20 (The Zen of Python)?",
          "resposta": "PEP 20, também conhecida como 'The Zen of Python', é um conjunto de princípios orientadores para escrever código Python, escrito pelo desenvolvedor Tim Peters. Ele enfatiza a legibilidade, simplicidade e clareza do código Python."
        },
        {
          "pergunta": "Como verificar se uma string contém outra string em Python?",
          "resposta": "Você pode verificar se uma string contém outra string em Python usando o operador 'in' ou os métodos 'find()', 'index()' ou 'count()'. Por exemplo: 'if 'substring' in minha_string:'."
        }
      ]
    }
    

    **Tarefa:** 
    Forneça a resposta mais relevante da base de conhecimento para a pergunta do usuário. Se nenhuma resposta for encontrada, procure em sua própria base de conhecimento."

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
    .catch((err) => console.error('Erro ao fazer a solicitação:', err));

    //const text = await getResponse(prompt);

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
        text='Tire suas dúvidas sobre python'
        fontWeight='bolder'
        textSize='two'
      />

      <form className="mt-14">
        <div className='space-x-4'>
          <div className='flex flex-col justify-start'>
            <Label text='Escreva sua dúvida ou pergunta sobre python' textSize='medium' color='text-gray-500' />
            <Input
              type='text'
              withBackground={false}
              idName='duvidaPython'
              value={duvidaPython}
              onChange={(e) => setDuvidaPython(e.target.value)}
              placeholder=''
              className='mt-1'
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
            type='projetoSimilarGithub'
            label='Enviar Pergunta'
            onClick={handleSubmit}
          />
        </div>
      </form>

      {loading ? (
        <div className='flex justify-center items-center'>
          <Loader />
          <br />
          <Label
            text='Analisando...'
            textSize='medium'
            color='block text-gray-500'
          />
        </div>
      ) : (

        resultText &&
        <Card backgroundColor='bg-gray-100 mt-5'>
          <div className='mt-4'>
            <Label
              text={`Resposta: `}
              textSize='medium'
              fontWeight='bolder'
              color='text-gray-500'
            />
            <Label
              text={`${resultText}`}
              textSize='medium'
              color='text-gray-500'
            />
          </div>
        </Card>

      )}

    </Card>
  )
}

export default DuvidasPython 