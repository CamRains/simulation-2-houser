module.exports = {
  getHouses(req, res) {
    const db = req.app.get("db");
    db.get_houses()
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(error => {
        console.error("Error in getHouses sql", error);
        res.status(500).send({ message: "Error on the server", error });
      });
  },

  addHouse(req,res) {
      const db = req.app.get("db");
      const {name, address, city, state, zipcode} = req.body

      db.add_house([name, address, city, state, zipcode]).then(houses => {
          res.status(200).send(houses)
      }).catch(error => {
          console.error("Error in addHouse sql",error);
          res.status(500).send({message: "An error has occured on the server", error})
      })
  },
  deleteHouse(req,res) {
      let {id} = req.params;

      if(!parseInt(id,10)) {
          return res.status(400).send({message: "Invalid or missing 'id' on request"})
      }
      id = parseInt(id, 10);
      const db = req.app.get("db")
      db.delete_house([id]).then(houses => {
          res.status(200).send(houses)
      }).catch(error => {
          console.error("Error in deletehouse sql",error)
          res.status(500).send({message: "An error has occurred on the server", error})
      });
  }




};
