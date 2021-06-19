const ApiLog = require('../../../models/api-log-model');

const insertApiLogData = async (req) => {
  ApiLog.create({
    endpoint: req.route.path,
    parameter: JSON.stringify(req.query),
  }).then(() => {
    console.log('Api log stored successfully');
  }).catch((error) => {
    console.log(`Api log stored unsuccessfully: ${error}`);
  });
};

module.exports = { insertApiLogData };
