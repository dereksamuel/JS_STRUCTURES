1 --> 2 --> 3 --> 4 --> 5 --> null

let singleLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null,
          },
        },
      }
    },
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  preppend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;

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
}

let myLisnkedList = new MySinglyLinkedList(2);
