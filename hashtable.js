class HashTable{
  constructor(size){
    this.data = new Array(size);
  }

  hashMethod(key){
    let hash = 0;
    for(let i = 0; i < key.length;i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set({ key, value }) {
    const address = this.hashMethod(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([ key, value ]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    if (!this.data[address]) throw new Error("No existe el hash");
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let index = 0; index < currentBucket.length; index++) {
        if (currentBucket[index][0] === key) return currentBucket[index][1];
      }
    }
    return undefined;
  }

  getHash(key) {
    const address = this.hashMethod(key);
    return this.data[address].length;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = this.data[address][i];
          this.data[address].splice(i, 1);
          delete this.data[address];
          return deletedValue;
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);