const { RequestError } = require('../../helpers');
const { Contact } = require('../../models/contact');

const removeById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw RequestError(404, "Not Found")
    }
    res.status(204).send({
      message: "Contact remove"
    })
}

module.exports = removeById;