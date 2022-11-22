import { dijkstra } from './dijkstra'

export * from './dijkstra'

export const algorithms = {
  dijkstra: {
    name: 'Dijkistra',
    value: 'dijkstra',
    execute: dijkstra
  },
  bellmanFord: {
    name: 'Bellman-Ford',
    value: 'bellmanFord',
    execute: () => {}
  }
}
