const { RequestError } = require('../../helpers');
const { schemas, Contact } = require('../../models/contact');

const updateById = async (req, res, next) => {
    const {error} =  schemas.addSchema.validate(req.body)
    if (error) {
      throw RequestError(400, 'missing fields"');
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
    if (!result) {
      throw RequestError(404, "Not Found")
    }
    res.json(result);
}

module.exports = updateById;