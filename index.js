import PathFinder from "./path-finder.js"

const pathFinder = new PathFinder()

pathFinder.addVertex("Alexandria")
pathFinder.addVertex("Cairo")
pathFinder.addVertex("Kafr El-Shaikh")
pathFinder.addVertex("Tanta")
pathFinder.addVertex("Asyut")
pathFinder.addVertex("Aswan")

pathFinder.addEdge("Alexandria", "Cairo", 225)
pathFinder.addEdge("Alexandria", "Kafr El-Shaikh", 122)
pathFinder.addEdge("Cairo", "Asyut", 389)
pathFinder.addEdge("Kafr El-Shaikh", "Tanta", 46)
pathFinder.addEdge("Kafr El-Shaikh", "Aswan", 1011)
pathFinder.addEdge("Tanta", "Asyut", 500)
pathFinder.addEdge("Tanta", "Aswan", 972)
pathFinder.addEdge("Asyut", "Aswan", 509)
pathFinder.addEdge("Tanta", "Cairo", 92)

const shortestPath = pathFinder.findShortestPath("Tanta", "Alexandria")
console.log('Shortest Path:', shortestPath.path)
console.log(`Shortest Distance: ${shortestPath.distance}km`)
