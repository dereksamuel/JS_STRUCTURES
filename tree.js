class Pointer {
  constructor(value) {
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
      while (true) {
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
    while (true) {
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

  delete(value) {
    const pointer = this.search(value);
    console.log(this.root);
    let root = this.root;
    while (true) {
      if (!root) return undefined;
      console.log(pointer)
      if (!pointer.left && !pointer.right) return this.root;
      if (pointer.value > root.value) {
        root = this.root.right;
        return this.root = pointer.right;
      }
      else {
        root = this.root.left;
        return this.root = pointer.left
      };
    }
  }
}

const instance = new Tree;
