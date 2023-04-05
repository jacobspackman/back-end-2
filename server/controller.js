const houses = require("./db.json");


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouses: (req, res) => {
        houses.push(req.body)
        res.status(200).send('House successfully added.')
    },
    updateHouses: (req, res) => {
        const { id } = req.params;
        const { type } = req.body
        const idx = houses.findIndex(house => house.id === +id)
        if(type === 'plus'){
            houses[idx].price += 10000
            res.status(200).send(houses)
        }else {
            houses[idx].price -= 10000
            res.status(200).send(houses)
     }

    },
    deleteHouses: (req, res) => {
        //destructure id from the route params
        //loop through houses array to fin the house with that id
        //splice house out of the houses array
        //send status 200 with updates array
        const { id } = req.params;
        const idx = houses.findIndex(house => house.id === +id)
        if(idx >= 0){
            houses.splice(idx, 1)
            res.status(200).send(houses)
        } else{
            res.sendStatus(400)
        }

    }
}

