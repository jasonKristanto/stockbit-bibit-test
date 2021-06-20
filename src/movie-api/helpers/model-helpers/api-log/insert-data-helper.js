require('dotenv').config();

const { ApiLog, ApiLogTest } = require('../../../models/api-log-model');

const insertApiLogData = async (req) => {
  const insertedData = {
    endpoint: req.route.path,
    parameter: JSON.stringify(req.query),
  };

  try {
    if (process.env.NODE_ENV === 'development') {
      await ApiLog.create(insertedData);
    } else {
      await ApiLogTest.create(insertedData);
    }

    console.log('Api log stored successfully');
  } catch (error) {
    console.log(`Api log stored unsuccessfully: ${error}`);
  }
};

module.exports = { insertApiLogData };
