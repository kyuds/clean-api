const callback = (controller) => {
    return (req, res) => {
        const http = {
            path: req.path,
            method: req.method,
            pathParams: req.params,
            queryParams: req.query,
            body: req.body
        };

        controller(http)
            .then(({ headers, statusCode, body }) => {
                res.set(headers).status(statusCode).send(body);
            })
            .catch(
                e => res.status(500).send({ 
                    error: "An unknown error occurred." 
                })
            );
    }
}

module.exports = callback;
