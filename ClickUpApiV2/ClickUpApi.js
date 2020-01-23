const spaces = require('./Endpoints/Spaces');

class ClickUpApi {
  get version() {
    return 2;
  }

  get baseURL() {
    return `https://api.clickup.com/api/v${this.version}`;
  }

  get spaces() {
    return new spaces(this.baseURL);
  }

}

module.exports = new ClickUpApi();