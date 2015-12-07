'use strict';

class Parser {
  constructor(data) {
    this.data = data;
    this.format = 'JSON';
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  // Check if string is of JSON format.
  isFormat(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  // Filter data based on search criteria.
  filterBy(key, value) {
    let payload = this.getData();

    if (payload !== undefined) {
      payload = payload.filter(function(element) {
        return element[key] == value;
      });

      // Set data to the new filtered value.
      this.setData(payload);
    }

    return payload;
  }
}

module.exports = Parser;
