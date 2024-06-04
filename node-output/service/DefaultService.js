'use strict';


/**
 * Get Cancellation Reason Codes
 * Get Cancellation Reason Codes, A user should be able to get the list of Cancellation Reason Codes to ACR so that the same can be configured and used while cancelling a reservation in ACR.
 *
 * xGatewayKey UUID get \"primaryKey\" subscription of a STAY user from STAY core.
 * returns cancellationReasonCodes
 **/
exports.acrV1Cancellation_reason_codesGET = function(xGatewayKey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "currentHotelDate" : "2024-05-06T09:47:25.123Z",
  "ErrorMessage" : "sucess",
  "cancelReason" : [ {
    "description" : "Cancellation Fee",
    "reasonCode" : "CXL"
  }, {
    "description" : "Cancellation Fee",
    "reasonCode" : "CXL"
  } ],
  "Success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Country Codes
 * Get Country Code: A user be should be able to get the list of Country Codes to ACR so that the same can be configured and used while creating a reservation in ACR.
 *
 * xGatewayKey UUID get \"primaryKey\" subscription of a STAY user from STAY core.
 * no response value expected for this operation
 **/
exports.acrV1Country_codesGET = function(xGatewayKey) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Reservation status codes
 * Get Reservation status code: A user should be able to get the list of Reservation Status Codes to ACR so that the same can be used in ACR
 *
 * xGatewayKey UUID get \"primaryKey\" subscription of a STAY user from STAY core.
 * no response value expected for this operation
 **/
exports.acrV1Reservation_status_codesGET = function(xGatewayKey) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get State Codes
 * Get State Code: A user should be able to get the list of State Codes to ACR so that the same can be configured and used while creating a reservation in ACR
 *
 * xGatewayKey UUID get \"primaryKey\" subscription of a STAY user from STAY core.
 * no response value expected for this operation
 **/
exports.acrV1State_codesGET = function(xGatewayKey) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

