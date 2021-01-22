//Edge list
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// adjacent list por índice

const graphal = [
  [2],
  [2, 3],
  [0, 1, 3],
  [1, 2],
];

//Hash table
const graphash = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 3],
};

//Matrix con binario :0
const graphMatrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

const graphlol = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};

class Graph {
  constructor() {
    this.length = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.length++;
  }

  addEdge() {
    if (
      arguments.length > 2 ||
      arguments.length < 2
    )
      throw new Error("Número de argumentos inválido, debe ingresar mínimo 2");
    for (let i = 0; i < arguments.length - 1; i++) {
      let argument = arguments[i];
      const argumentTwo = arguments[i + 1];
      console.log(argument, argumentTwo);
      if (!argument || !argumentTwo) return null;
      this.adjacentList[argument].push(argumentTwo);
      this.adjacentList[argumentTwo].push(argument);
    }
  }
}

const myGraph = new Graph();
