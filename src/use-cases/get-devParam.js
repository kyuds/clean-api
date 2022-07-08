const makeGetDevParam = ({ database }) => {
    return async ({ company, language }) => {
        return {
            curr: company, 
            lang: language
        }
    };
};

module.exports = makeGetDevParam;
