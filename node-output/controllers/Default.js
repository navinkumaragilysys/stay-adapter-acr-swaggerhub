'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.acrV1Cancellation_reason_codesGET = function acrV1Cancellation_reason_codesGET (req, res, next, xGatewayKey) {
  Default.acrV1Cancellation_reason_codesGET(xGatewayKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.acrV1Country_codesGET = function acrV1Country_codesGET (req, res, next, xGatewayKey) {
  Default.acrV1Country_codesGET(xGatewayKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.acrV1Reservation_status_codesGET = function acrV1Reservation_status_codesGET (req, res, next, xGatewayKey) {
  Default.acrV1Reservation_status_codesGET(xGatewayKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.acrV1State_codesGET = function acrV1State_codesGET (req, res, next, xGatewayKey) {
  Default.acrV1State_codesGET(xGatewayKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
