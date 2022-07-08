const makeFindDev = ({ database }) => {
    return Object.freeze({ id, params });

    async function id ({ id }) {
        const profile = await database.findById({ id });
        return profile;
    }

    async function params ({ params }) {
        //  filter unnecessary parameters here. 
        const filteredParams = params;
                
        const devs = await database.findByParams({ filteredParams });
        return devs;
    }
};

module.exports = makeFindDev;