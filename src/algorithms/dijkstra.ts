import { Graph, Vertex } from '../types'
import { initDistanceList } from '../utils/graph'
import colors from 'colors'

export function dijkstra (graph: Graph, startVertex: Vertex) {
  console.log(colors.cyan('inicializando a lista de distâncias...'))
  const { distances, predecessors } = initDistanceList(graph, startVertex)
  console.log(colors.cyan('lista de distâncias:'), distances)

  Object.entries(graph).forEach(([summitKey, summitValue]) => {
    console.log('\n\n')
    console.log(colors.cyan(`visitando o vértice: ${summitKey}`))

    Object.entries(summitValue).forEach(([edgeKey, edgeValue]) => {
      console.log(colors.cyan('visitando a aresta'), edgeKey, colors.cyan('do vértice'), summitKey)
      const newDistance = distances[summitKey] + edgeValue
      console.log(colors.cyan('atribuindo o valor da aresta na lista de distâncias'))
      if (!distances[edgeKey] || newDistance < distances[edgeKey]) {
        distances[edgeKey] = newDistance
        predecessors[edgeKey] = summitKey
      }

      console.log(colors.cyan('lista de distâncias após atribuição'))
      console.table(distances)
      console.log(colors.cyan('lista de ancestrais após atribuição'))
      console.table(predecessors)
    })
  })
}
