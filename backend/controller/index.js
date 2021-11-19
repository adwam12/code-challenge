const data = require("../data/sample.json");
const Fuse = require('fuse.js')

function cleanResult(array) {
  const result = []
  for (let i = 0; i < array.length; i++) {

    result.push(array[i]['item'])
  }
  return result

}



const searchController = (req, res, next) => {

  if (req.originalUrl.slice(0, 5) === '/data') {
    try {

      let result = searchByAttribute(req.query.string || '')

      result = cleanResult(result)
      res.status(200).send({ result: result })
    } catch (err) {
      console.log('error found')
      next(err)
    }
  } else {
    try {

      let result = searchByLoan(req.params.id)
      result = cleanResult(result)

      res.status(200).send({ result: result })
    } catch (err) {
      console.log('error found')
      next(err)
    }
  }

}

function searchByAttribute(string) {

  const options = {
    isCaseSensitive: false,
    threshold: 0.2,
    keys: [
      "loan_number",
      "first_name",
      "last_name",
      "city"
    ]
  };

  const fuse = new Fuse(data, options)

  return fuse.search(string)

}

function searchByLoan(item) {



  const options = {
    isCaseSensitive: false,
    threshold: 0.2,
    keys: [
      "loan_number"
    ]
  };

  const fuse = new Fuse(data, options)

  return fuse.search(item)
}



module.exports = {
  searchByAttribute,
  searchController,
  searchByLoan
}