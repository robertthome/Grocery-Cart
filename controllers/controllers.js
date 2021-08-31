
// Reqiure Models Here

const GetExample = async (req, res) => {
  res.send({ msg: `${req.method} Example` })
}
const PostFood = async (req, res) => {
  res.send({ msg: `${req.method} Example`, data: req.body || [] })
}

const DeleteExample = async (req, res) => {
  res.send({ msg: `${req.method} Example` })
}

module.exports = {
  GetExample,
  PostFood,
  DeleteExample
}