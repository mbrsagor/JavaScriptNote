class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener(this.state));
  }

  getState() {
    return this.state;
  }
}

const store = new Store({ count: 0 });

store.subscribe((state) => {
  console.log("State changed:", state);
});

store.setState({ count: store.getState().count + 1 });
store.setState({ count: store.getState().count + 1 });

