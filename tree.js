class Pointer {
  constructor (value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const point = new Pointer(value);
    if (!this.root) this.root = point;
    else {
      let currentRoot = this.root; // para moverlo a la derecha o izquierda
      while(true) {
        if (value < currentRoot.value) {
          if (!currentRoot.left) {
            currentRoot.left = point;
            return this;
          }
          currentRoot = currentRoot.left;// aquí se vuelve el root en el left y así hasta que encuentre el valor
        } else {
          if (!currentRoot.right) {
            currentRoot.right = point;
            return this;
          }
          currentRoot = currentRoot.right;
        }
      }
    }
  }

  search(value) {
    let rootCopy = this.root;
    if (!value) return "DEBES PASAR UN VALOR";
    while(true) {
      if (!rootCopy) return undefined;
      else {
        if (rootCopy.value === value) return rootCopy;
        else {
          if (value < rootCopy.value) {
            rootCopy = rootCopy.left;
          } else rootCopy = rootCopy.right;
        }
      }
    }
  }
}

const instance = new Tree;
