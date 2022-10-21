const { RequestError } = require('../../helpers');
const { schemas, Contact } = require('../../models/contact');

const add = async (req, res, next) => {
    const {error} = schemas.addSchema.validate(req.body)
    if (error) {
      throw RequestError(400, 'missing required name field"');
    }
  const contact = req.body; 
    const result = await Contact.create(contact);
    res.status(201).json(result)
}
  
module.exports = add;