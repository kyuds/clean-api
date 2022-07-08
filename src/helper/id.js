const cuid = require("cuid");

const Id = Object.freeze({
    makeId: cuid,
    isValid: cuid.isCuid
})
  
module.exports = Id;
