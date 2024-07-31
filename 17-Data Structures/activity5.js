//Activity 5 - Graphs
//Task 9

class Graph {
    constructor() {
        this.vertices = new Map(); // Map to store vertices and their adjacent vertices
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, new Set());
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.vertices.get(vertex1).add(vertex2);
        this.vertices.get(vertex2).add(vertex1);
    }

    // Perform breadth-first search starting from a given vertex
    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            if (!visited.has(currentVertex)) {
                console.log(currentVertex);
                visited.add(currentVertex);
                for (const neighbor of this.vertices.get(currentVertex)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    shortPath(startVertex, targetVertex) {
        const visited = new Set();
        const queue = [[startVertex]];

        while (queue.length > 0) {
            const currentPath = queue.shift();
            const currentVertex = currentPath[currentPath.length - 1];

            if (currentVertex === targetVertex) {
                console.log("Shortest path found:", currentPath.join(" -> "));
                return;
            }

            if (!visited.has(currentVertex)) {
                visited.add(currentVertex);
                for (const neighbor of this.vertices.get(currentVertex)) {
                    queue.push([...currentPath, neighbor]);
                }
            }
        }

        console.log("No path found between", startVertex, "and", targetVertex);
    }
}


// Example usage:
const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");

console.log("BFS starting from vertex A:");
myGraph.bfs("A");

//Task 10
const socialNetwork = new Graph();
socialNetwork.addEdge("Alice", "Bob");
socialNetwork.addEdge("Bob", "Charlie");
socialNetwork.addEdge("Charlie", "David");
socialNetwork.addEdge("David", "Eve");

console.log("Shortest path from 'Alice' to 'Eve':");
socialNetwork.shortPath("Alice", "Eve");
console.log("Shortest path from 'Bob' to 'David':");
socialNetwork.shortPath("Bob", "David");