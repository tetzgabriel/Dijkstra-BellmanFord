import { Distance, DistanceList, Edge, Graph, Vertex } from '../types'

/**
 * Adiciona um novo vértice e retorna o valor de sua chave
 *
 * @export
 * @param {Graph} graph
 * @return {Vertex}
 */
export function addVertex (graph: Graph): Vertex {
  graph[Object.keys(graph).length + 1] = {}
  return Object.keys(graph)[Object.keys(graph).length - 1]
}

export function addEdge (graph: Graph, v: Vertex, w: Vertex, distance: Distance): Distance {
  if (Object.keys(graph).includes(v)) {
    graph[v][w] = distance
    return distance
  }
  return Infinity // Retorna infinito para indicar que o vértice v não existe
}

/**
 * Inicializa o vetor de distâncias e o vetor de ancestrais.
 *
 * Vetor de distância é tal que, dado d[v] sendo v um vértice do Graph,
 * d[v] é a distância entre o vértice v e o vértice fonte.
 *
 * O Vetor de ancestrais é tal que, dado a[v] sendo v um vértice do Graph,
 * a[v] é o vértice que precede o vértice v no caminho mais curto até o
 * vértice fonte.
 *
 * @export
 * @param {Graph} graph
 * @return {*}  DistanceList
 */
export function initDistanceList (graph: Graph): DistanceList {
  let distances: Edge = {}
  const ancestors: Array<Vertex> = []
  Object.keys(graph).forEach((summit, index) => {
    distances = {
      ...distances,
      [summit]: index === 0 ? 0 : Infinity
    }
    ancestors.push('')
  })
  return { distances, ancestors }
}
