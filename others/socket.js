class Ws {
    get newClientPromise() {
      return new Promise((resolve, reject) => {
          let wsClient = new WebSocket("ws://localhost:8000/chat");
          print("Hello Socket");
        console.log(wsClient)
        wsClient.onopen = () => {
          console.log("connected");
          resolve(wsClient);
        };
        wsClient.onerror = error => reject(error);
      })
    }
    get clientPromise() {
      if (!this.promise) {
        this.promise = this.newClientPromise
      }
      return this.promise;
    }
}

// newClientPromise();
var ws = new Ws();
ws.newClientPromise()
