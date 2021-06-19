const sendSuccessResult = (message = 'success', data = []) => ({
  statusCode: 200,
  status: 'success',
  message,
  data,
});

const sendFailedResult = (statusCode = 500, message = 'failed', details = []) => ({
  statusCode,
  status: 'failed',
  message,
  details,
});

const sendResponse = (res, result) => {
  res.status(result.statusCode).json({
    message: result.message,
    data: result.data,
  });
};

module.exports = {
  sendSuccessResult,
  sendFailedResult,
  sendResponse,
};
