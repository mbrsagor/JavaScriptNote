let instance;
let globalState = {
  color: ""
};

class StateUtility {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }

    instance = this;
  }

  getPropertyByName(propertyName) {
    return globalState[propertyName];
  }

  setPropertyValue(propertyName, propertyValue) {
    globalState[propertyName] = propertyValue;
  }
}

let stateUtilityInstance = Object.freeze(new StateUtility());

export default stateUtilityInstance;

