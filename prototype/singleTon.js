class Singleton {
    private static instance?: Singleton;
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    static getInstance() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      Singleton.instance = new Singleton();
      return Singleton.instance;
    }
  }
  