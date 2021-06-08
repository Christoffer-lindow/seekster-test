const badResponse = (res, reason) => {
    res.status(400).json({
        message: reason
    });
};

const notFoundResponse = (res, message) => {
    res.status(404).json({
        message
    });
};

const createdResponse = (res, model) => {
    res.status(201).json(model);
};

const okResponse = (res, object) => {
    res.status(200).json(object);
};

export {
    badResponse,
    createdResponse,
    okResponse,
    notFoundResponse
};