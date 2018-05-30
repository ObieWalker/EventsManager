/**
 *
 *
 * @class LocalStorageMock
 */
class LocalStorageMock {
  /**
   * Creates an instance of LocalStorageMock.
   * @memberof LocalStorageMock
   */
  constructor() {
    this.store = {};
  }
  /**
   * @returns {*} null
   *
   * @memberof LocalStorageMock
   */
  clear() {
    this.store = {};
  }
  /**
   *
   *
   * @param {any} key
   * @returns {object} key
   * @memberof LocalStorageMock
   */
  getItem(key) {
    return this.store[key] || null;
  }
  /**
   * @returns {*} null
   *
   * @param {any} key
   * @param {any} value
   * @memberof LocalStorageMock
   */
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  /**
   * @returns {*} null
   *
   * @param {any} key
   * @memberof LocalStorageMock
   */
  removeItem(key) {
    delete this.store[key];
  }
}
global.localStorage = new LocalStorageMock();
