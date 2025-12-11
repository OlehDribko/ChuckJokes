class LocalStorageUpdate {
  getItems(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setItems(key, data) {
    const jsonData = JSON.stringify(data);

    localStorage.setItem(key, jsonData);

    return this.getItems(key);
  }
}

const localStorageAbstraction = new LocalStorageUpdate();

export default localStorageAbstraction;
