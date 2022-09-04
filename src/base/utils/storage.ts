class Storage {
  setStorage(key: string, value: any, isBota?: boolean) {
    if (isBota) {
      value = window.btoa(JSON.stringify(value));
    }
    window.localStorage.setItem(key, value);
  }
  getStorage(key: string, isAtob?: boolean) {
    let value = window.localStorage.getItem(key);
    if (value) {
      if (isAtob) {
        value = window.atob(value);
      }
      return value;
    } else {
      return "";
    }
  }
  getStorageObject(key: string) {
    let value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      return "";
    }
  }
  removeStorage(key: string) {
    window.localStorage.removeItem(key);
  }
  clearStorage(key: string) {
    window.localStorage.clear();
  }
  setSession(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }
}
export default new Storage();
