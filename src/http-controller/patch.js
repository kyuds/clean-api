const makePatchDev = ({ editDev }) => {
    return async (http) => {
        try {
            const changes = { ...http.body, id: http.pathParams.id }
            const patched = await editDev(changes);
            
            return {
                headers: {
                    'Content-Type': "application/json",
                    'Last-Modified': new Date(patched.modifiedOn).toUTCString()
                },
                statusCode: 200,
                body: { patched }
            }
        } catch (e) {
            console.log(e);
            return {
                headers: {
                    'Content-Type': "application/json",
                },
                statusCode: 400,
                body: { error: e.message }
            }
        }
    };
};

module.exports = makePatchDev;
