import Express from 'express'
import ExpressAdapter from '../../adapter/ExpressAdapter'
import ParkingLotController from '../../controller/ParkingLotController'
const app = new Express()

// app.get('/parkingLots/:code', (req, res) => {
//     const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
//     const getParkingLot = new GetParkingLot(parkingLotRepositorySQL)
//     const parkingLot = getParkingLot.execute(req.params.code)
//     res.json(parkingLot)
// })

app.get('/parkingLots/:code', ExpressAdapter.create(ParkingLotController.getParkingLot))

app.listen(3000)