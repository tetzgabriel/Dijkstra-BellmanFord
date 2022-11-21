type Distance = number
type Vertex = string
type Edge = Record<Vertex, Distance>
type Grafo = Record<Vertex, Edge>

function addVertex(graph: Grafo): Vertex {
  graph[Object.keys(graph).length + 1] = {};
  return Object.keys(graph)[Object.keys(graph).length - 1];
}

function addEdge(graph: Grafo, v: Vertex, w: Vertex, distance: Distance): Distance {
  if(Object.keys(graph).includes(v)) {
    graph[v][w] = distance;
    return distance;
  }
  return Infinity; // Retorna infinito para indicar que o vértice v não existe
}

// Teste das funções addVertex e addEdge
var problem: Grafo = {};
console.log('vértice', addVertex(problem), 'adicionado');
console.log('vértice', addVertex(problem), 'adicionado');
console.log('vértice', addVertex(problem), 'adicionado');
console.log('vértice', addVertex(problem), 'adicionado');
console.log('Primeiro problema', problem)
addEdge(problem, '1', '2', 3);
addEdge(problem, '2', '3', 4);
addEdge(problem, '3', '4', -1);
addEdge(problem, '4', '1', 2);
console.log('Primeiro problema', problem)

const problem2: Grafo = {
  1: { 2: 2, 3: 1 },
  2: { 4: 1 },
  3: { 4: 3, 5: 4 },
  4: { 6: 3 },
  5: { 6: 2 },
  6: {}
}

/*
Inicializa o vetor de distâncias e o vetor de ancestrais.

   Vetor de distância é tal que, dado d[v] sendo v um vértice do grafo,
   d[v] é a distância entre o vértice v e o vértice fonte.

   O Vetor de ancestrais é tal que, dado a[v] sendo v um vértice do grafo,
   a[v] é o vértice que precede o vértice v no caminho mais curto até o
   vértice fonte.
*/
const initDistanceList = (graph: Grafo): [Edge, Array<Vertex>] => {
  let distances: Edge = {};
  let ancestors: Array<Vertex> = [];
  Object.keys(graph).forEach((summit, index) => {
    distances = {
      ...distances,
      [summit]: index === 0 ? 0 : Infinity
    }
    ancestors.push("")
    })
  return [distances, ancestors]
}

function dijkstraAlgorithm (graph: Grafo) {
  console.log('inicializando a lista de distâncias...')
  let [distances, ancestors] = initDistanceList(graph)
  console.log('lista de distâncias:', distances)

  Object.entries(graph).forEach(summit => {
    console.log('\n\n')
    console.log('visitando o vértice:', summit[0])

    Object.entries(summit[1]).forEach(edge => {
      console.log('visitando a aresta', edge[0], 'do vértice', summit[0])

      const newDistance = distances[summit[0]] + edge[1]
      console.log('atribuindo o valor da aresta na lista de distâncias')
      
      if(distances[edge[0]] && newDistance > distances[edge[0]]) {
        distances[edge[0]] = distances[edge[0]]
      } else {
        distances[edge[0]] = newDistance
        ancestors[edge[0]] = edge[1]
      }
      console.log('lista de distâncias após atribuição', distances)
      console.log('lista de ancestrais após atribuição', ancestors)
      })
  })
}

dijkstraAlgorithm(problem2)
