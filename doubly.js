class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class MyDoublyLinked {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    node.prev = this.tail;
    if (!!!this.tail) this.tail.next = null;
    else this.tail.next = this.head;
    this.tail.next = node;
    this.tail = node;

    this.length++;
    return this;
  }

  preppend(value) {
    const node = new Node(value);
    node.prev = this.tail;
    if (!!!this.tail) node.next = null;
    else node.next = this.head;
    this.head = node;
    this.tail = node;

    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);

    const node = new Node(value);
    const firstPointer = this.getByIndex(index - 1);
    const holdingPointer = firstPointer.next;

    firstPointer.next = node;
    node.next = holdingPointer;
    this.head[index] = node;

    this.length ++;

    return this;
  }

  getByIndex(index) {
    let counter = 0;
    let node = this.head;
    while(counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  remove(index){
    if(index >= this.length) {
      console.error("index is out of limits of the array");
    } else if( index == 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--
    }
    
    else if(index === this.length - 1){
      const firstPointer = this.getTheIndex(index - 1);
      firstPointer.next = null;
      
      this.tail = firstPointer;
      this.length--;
    } else {
      const firstPointer = this.getTheIndex(index - 1);
      const pointerToRemove = firstPointer.next;
      const nextToPointerToRemove = pointerToRemove.next;
      nextToPointerToRemove.prev = firstPointer;
      firstPointer.next = nextToPointerToRemove;
      this.length--;
    }
  }
}

let myLisnkedList = new MyDoublyLinked(2020_55);
