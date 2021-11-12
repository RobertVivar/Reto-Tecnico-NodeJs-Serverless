// Utilizar funcionalidades del Ecmascript 
'use strict';

// Cargando los Modulos 
const _Create = require('src/routes/create.js');
const _ReadAll = require('src/routes/read-all.js');
const _ReadOne = require('src/routes/read-one.js');
const _Update = require('src/routes/update.js');
const _Delete = require('src/routes/delete.js');

module.exports.create = (event, context, callback) => {
  _Create(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readAll = (event, context, callback) => {
  _ReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readOne = (event, context, callback) => {
  _ReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.update = (event, context, callback) => {
  _Update(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.delete = (event, context, callback) => {
  _Delete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};
/*
module.exports.test = async(event) => {
  return {
      statusCode: 200,
      body: JSON.stringify(
        value: {
          message: 'Hi ServerLess Test',
          input: event,
        },
        replacer: null,
        space: 2
      ),
  };
};*/