const asyncHandler = require('express-async-handler')

//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler((req, res) => {
  res.status(200).json({ message: 'get all contacts' })
})

//@desc get a contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `get a contact ${req.params.id}` })
})

//@desc create a contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler((req, res) => {
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    res.status(400)
    throw new Error('all fields are mandatory')
  }
  res.status(201).json({ message: 'create a contact' })
})

//@desc update a contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` })
})

//@desc delete a contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `delete a contact ${req.params.id}` })
})

module.exports = { contactController: { getContacts, getContact, createContact, updateContact, deleteContact } }