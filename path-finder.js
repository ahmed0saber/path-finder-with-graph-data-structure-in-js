class PathFinder {
    constructor() {
        this.vertices = {}
    }

    addVertex(vertex) {
        this.vertices[vertex] = {}
    }

    addEdge(source, destination, weight) {
        this.vertices[source][destination] = weight
        this.vertices[destination][source] = weight
    }

    findShortestPath(start, end) {
        const distances = {}
        const previous = {}
        const queue = []
        const visited = {}

        for (let vertex in this.vertices) {
            if (vertex === start) {
                distances[vertex] = 0
                queue.push({ node: vertex, weight: 0 })
            } else {
                distances[vertex] = Infinity
                queue.push({ node: vertex, weight: Infinity })
            }

            previous[vertex] = null
        }

        while (queue.length) {
            queue.sort((a, b) => a.weight - b.weight)
            const { node } = queue.shift()
            visited[node] = true

            for (let neighbor in this.vertices[node]) {
                if (!visited[neighbor]) {
                    const distance = distances[node] + this.vertices[node][neighbor]

                    if (distance < distances[neighbor]) {
                        distances[neighbor] = distance
                        previous[neighbor] = node
                        queue.push({ node: neighbor, weight: distance })
                    }
                }
            }
        }

        const path = []
        let current = end

        while (current !== null) {
            path.unshift(current)
            current = previous[current]
        }

        return { path, distance: distances[end] }
    }
}

export default PathFinder
