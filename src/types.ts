export type Distance = number
export type Vertex = string
export type Edge = Record<Vertex, Distance>
export type Graph = Record<Vertex, Edge>
export type DistanceList = {
  distances: Edge;
  predecessors: Record<Vertex, Vertex>;
}
