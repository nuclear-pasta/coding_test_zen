class ZenClient {

  static init() {
    this.baseURL = 'http://localhost:3000';
    this.employeesURL = this.baseURL + '/employee';
  }

  static getEmployees() {
    return fetch(this.employeesURL)
  }


}

ZenClient.init();

export default ZenClient;
