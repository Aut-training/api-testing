var request = require('request-promise');

class Request {
  async get(url, params = null, headers = null) {
    try {
      const response = await request({
        uri: url,
        qs: params,
        headers: headers,
        json: true
      });
      return response;
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.options
        }
      );
    }
  }

  async post(url, data = null, headers = null) {
    try {
      const response = await request({
        method: 'POST',
        uri: url,
        body: data,
        headers: headers,
        json: true
      });
      return response;
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.options
        }
      );
    }
  }

  async delete(url, data = null, headers = null) {
    try {
      const response = await request({
        method: 'DELETE',
        uri: url,
        body: data,
        headers: headers
      });
      return JSON.parse(response);
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.options
        }
      );
    }
  }
}

module.exports = new Request();
