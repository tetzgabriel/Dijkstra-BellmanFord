import { Graph, Vertex } from '../types'
import { initDistanceList } from '../utils/graph'

export function bellmanFordAlgorithm (graph: Graph, startVertex: Vertex) {
  console.log('inicializando a lista de distâncias...')
  const { distances, predecessors } = initDistanceList(graph, startVertex)
  console.log('lista de distâncias:', distances)

  Object.entries(graph).forEach(summit => {
    console.log('\n\n')
    console.log('visitando o vértice:', summit[0])

    Object.entries(summit[1]).forEach(edge => {
      console.log('visitando a aresta', edge[0], 'do vértice', summit[0])

      const newDistance = distances[summit[0]] + edge[1]
      console.log('atribuindo o valor da aresta na lista de distâncias')

      if (!distances[edge[0]] || newDistance < distances[edge[0]]) {
        distances[edge[0]] = newDistance
        predecessors[edge[0]] = summit[0]
      }

      console.log('lista de distâncias após atribuição', distances)
      console.log('lista de ancestrais após atribuição', predecessors)
    })

    Object.entries(summit[1]).forEach(edge => {
      const newDistance = distances[summit[0]] + edge[1]

      if (!distances[edge[0]] || newDistance < distances[edge[0]]) {
        console.log('presenca de ciclo negativo no grafo')
        return false
      }
    })
  })

  return true
}
