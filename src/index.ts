import { algorithms } from './algorithms'
import { Distance, Graph, Vertex } from './types'
import { addEdge, addVertex } from './utils/graph'
import colors from 'colors'
import inquirer from 'inquirer'

const { prompt } = inquirer

// Teste das funções addVertex e addEdge
const problem: Graph = {}
let { numberVertex } = await prompt([
  {
    type: 'number',
    message: colors.underline.yellow('Quantos vértices o grafo possui?\n'),
    name: 'numberVertex'
  }
])

while (numberVertex > 0) {
  const addedVertex = addVertex(problem)
  console.log(colors.green(`Vértice ${addedVertex} adicionado!`))
  numberVertex--
}

console.log('\n', colors.green('Grafo inicializado!\n'), problem)

const problemKeys = Object.keys(problem)
for (let i = 0; i < problemKeys.length; i++) {
  const key = problemKeys[i]
  console.log(key)
  const otherKeys = problemKeys.filter((problemKey) => key !== problemKey)

  const { vertexConnectionList } = await prompt<{ vertexConnectionList: string[] }>([
    {
      type: 'checkbox',
      message: colors.underline.yellow(`O vértice ${key} se conecta com quais vértices abaixo?`),
      name: 'vertexConnectionList',
      choices: otherKeys
    }
  ])

  for (let j = 0; j < vertexConnectionList.length; j++) {
    const vertexConnection = vertexConnectionList[j]
    const { distance } = await prompt<{ distance: Distance }>([
      {
        type: 'number',
        message: colors.underline.yellow(`Qual a distância entre os vértices ${key} e ${vertexConnection}?`),
        name: 'distance'
      }
    ])
    addEdge(problem, key, vertexConnection, distance)
  }
}

console.log(colors.green('Grafo construído!'), problem)

const { algorithmChoiced } = await prompt<{
  algorithmChoiced: string
}>([
  {
    type: 'list',
    name: 'algorithmChoiced',
    message: colors.underline.yellow('Qual algoritmo deseja executar?'),
    choices: [
      {
        value: algorithms.dijkstra.value,
        name: algorithms.dijkstra.name
      },
      {
        value: algorithms.bellmanFord.value,
        name: algorithms.bellmanFord.name
      }
    ]
  }
])

const { startVertexChoiced } = await prompt<{
  startVertexChoiced: Vertex
}>([
  {
    type: 'list',
    name: 'startVertexChoiced',
    message: colors.underline.yellow('Qual o vertice inicial?'),
    choices: problemKeys
  }
])

console.log(colors.underline.yellow(`Executando algoritmo ${algorithms[algorithmChoiced].name}`))

algorithms[algorithmChoiced].execute(problem, startVertexChoiced)
