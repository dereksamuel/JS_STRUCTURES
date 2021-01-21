class Stack {
  constructor (initialValue) {
    if (initialValue) this.top = initialValue;
    this.top = undefined;
    this.bottom = undefined;
    this.length = 0;
  }

  peek() {
    const topCopy = JSON.parse(JSON.stringify(this.top));
    if (this.top.next) topCopy.next.next = null;
    return topCopy;
  }

  push(data) {
    const node = newNode(data);

    this.length++;
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
      return this;
    }

    const theNextPoint = this.top;
    this.top = node;
    this.top.next = theNextPoint;
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
