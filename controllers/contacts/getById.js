const { RequestError } = require('../../helpers');
const { Contact } = require('../../models/contact');

const getById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) {
      throw RequestError(404, "Not Found")
    }
    res.json(result);
}

module.exports = getById;