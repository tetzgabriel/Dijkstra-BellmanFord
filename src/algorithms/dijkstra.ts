import { Graph } from '../types'
import { initDistanceList } from '../utils/graph'

export function dijkstraAlgorithm (graph: Graph) {
  console.log('inicializando a lista de distâncias...')
  const { distances, ancestors } = initDistanceList(graph)
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
        ancestors[edge[0]] = edge[1]
      }

      console.log('lista de distâncias após atribuição', distances)
      console.log('lista de ancestrais após atribuição', ancestors)
    })
  })
}
