/**
 * @file - Parser Class.
 * @author - Antonio Fazari
 *
 * Utility class to parse request data.
 */
'use strict';

class Parser {
  constructor(data) {
    this.data = data;
    this.format = 'JSON';
  }

  // Mutator for data property.
  setData(data) {
    this.data = data;
  }

  // Accessor for data property.
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

  // Prepare response data.
  prepareData() {
    const data = this.getData();
    let response = [];

    data.forEach(function(element, index, array) {
      response.push({
        'concataddress': this.concatAddress(element.address),
        'lat': element.address.lat ? element.address.lat : null,
        'lon': element.address.lon ? element.address.lon : null,
        'type': element.type,
        'workflow': element.workflow
      });
    }, this);

    return response;
  }

  // Concatenate given address object.
  concatAddress(address) {
    let concatenatedAddress = '';

    concatenatedAddress += address.buildingNumber + ' ';
    concatenatedAddress += address.street + ' ';
    concatenatedAddress += address.suburb + ' ';
    concatenatedAddress += address.state + ' ';
    concatenatedAddress += address.postcode;

    return concatenatedAddress;
  }
}

module.exports = Parser;
