class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
    return {
      ...data
    }
  }

  unshift(data) {
    this.data[0] = data;
    this.length++;
    return {
      ...data
    }
  }

  shift() {
    const element = this.data[0];
    delete this.data[0];
    this.delete(0);
    this.length--;
    return element;
  }

  pop() {
    if (Object.keys(this.data).length === 0) return this.data;
    const lastElement = this.data[this.length - 1]
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  shiftIndex(i) {
    for (let index = i; index < this.length - 1; index++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array = new MyArray();