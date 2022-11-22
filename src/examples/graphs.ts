import inquirer from 'inquirer'
import { Graph } from '../types'
import colors from 'colors'
import { algorithms } from '../algorithms'

const { prompt } = inquirer

export const example1: Graph = {
  0: { 1: 2, 2: 6 },
  1: { 3: 5 },
  2: { 3: 8 },
  3: { 4: 10, 5: 15 },
  4: { 5: 6, 6: 2 },
  5: { 4: 6, 6: 6 },
  6: { }
}

const example1Keys = Object.keys(example1)

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

console.log(colors.underline.yellow(`Executando algoritmo ${algorithms[algorithmChoiced].name}`))

algorithms[algorithmChoiced].execute(example1, example1Keys[0])
