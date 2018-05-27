export default {
  setItem(key, value) {
    if (key && value) {
      return sessionStorage.setItem(key, JSON.stringify(value));
    }
    return '';
  },

  removeItem(key) {
    if (key) {
      return sessionStorage.removeItem(key);
    }
    return '';
  },

  getItem(key) {
    if (key) {
      return JSON.parse(sessionStorage.getItem(key));
    }
    return '';
  }
};
