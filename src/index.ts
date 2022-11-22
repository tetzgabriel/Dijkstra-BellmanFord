import { bellmanFordAlgorithm } from './algorithms/bellman-ford'
import { dijkstraAlgorithm } from './algorithms/dijkstra'
import { Graph } from './types'
import { addEdge, addVertex } from './utils/graph'

// Teste das funções addVertex e addEdge
const problem: Graph = {}
console.log('vértice', addVertex(problem), 'adicionado')
console.log('vértice', addVertex(problem), 'adicionado')
console.log('vértice', addVertex(problem), 'adicionado')
console.log('vértice', addVertex(problem), 'adicionado')
console.log('Primeiro problema', problem)
addEdge(problem, '1', '2', 3)
addEdge(problem, '2', '3', 4)
addEdge(problem, '3', '4', -1)
addEdge(problem, '4', '1', 2)
console.log('Primeiro problema', problem)

const problem2: Graph = {
  1: { 2: 2, 3: 1 },
  2: { 4: 1 },
  3: { 4: 3, 5: 4 },
  4: { 6: 3 },
  5: { 6: 2 },
  6: {}
}

console.log('Dijkstra')
dijkstraAlgorithm(problem2, '1')

console.log('BellmanFord')
bellmanFordAlgorithm(problem2, '1')
