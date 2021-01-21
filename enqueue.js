class Stack {
  constructor (initialValue) {
    if (initialValue) this.first = initialValue;
    this.first = undefined;
    this.last = undefined;
    this.length = 0;
  }

  peek() {
    const lastCopy = JSON.parse(JSON.stringify(this.last));
    return lastCopy;
  }

  enqueue(data) {
    const node = newNode(data);

    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

function newNode(value) {
  return {
    value,
    next: null,
  }
}

const x = new Stack();