const success = (statusCode, message, data) => {
    return {
        success: true,
        statusCode: statusCode,
        message: message,
        data: data,
    };
};

const errors = (statusCode, message, data) => {
    return {
        success: false,
        statusCode: statusCode,
        message: message,
        data: data,
    };
};

module.exports = {
    success,
    errors,
};
