const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    const errorStatusCode = err.status || 500;
    const errorMessage = err.message || "Server error";
    res.status(errorStatusCode).json({
        message: errorMessage,
    });
}

export default errorHandler;