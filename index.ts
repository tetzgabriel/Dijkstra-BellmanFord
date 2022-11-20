type Distance = number
type Edge = Record<string, Distance>
type Grafo = Record<string, Edge>

const problem2: Grafo = {
  1: { 2: 2, 3: 1 },
  2: { 4: 1 },
  3: { 4: 3, 5: 4 },
  4: { 6: 3 },
  5: { 6: 2 },
  6: {}
}

const initDistanceList = (graph: Grafo): Edge => {
  let distances: Edge = {}
  Object.keys(graph).forEach((summit, index) => {
    distances = {
      ...distances,
      [summit]: index === 0 ? 0 : Infinity
    }
  })
  return distances
}

function dijkstraAlgorithm (graph: Grafo) {
  console.log('inicializando a lisat de distâncias...')
  const distances: Edge = initDistanceList(graph)
  console.log('lista de distâncias:', distances)

  Object.entries(graph).forEach(summit => {
    console.log('\n\n')
    console.log('visitando o vértice:', summit[0])

    Object.entries(summit[1]).forEach(edge => {
      console.log('visitando a aresta', edge[0], 'do vértice', summit[0])

      const newDistance = distances[summit[0]] + edge[1]
      console.log('atribuindo o valor da aresta na lista de distâncias')
      distances[edge[0]] = distances[edge[0]] && newDistance > distances[edge[0]] ? distances[edge[0]] : newDistance
      console.log('lista de distâncias após atribuição', distances)
    })
  })
}

dijkstraAlgorithm(problem2)
