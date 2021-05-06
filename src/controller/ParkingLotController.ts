import ParkingLotRepositorySQL from '../infra/repository/ParkingLotRepositorySQL'
import GetParkingLot from '../core/usecase/GetParkingLot'

export default class ParkingLotController {
    static async getParkingLot (params, body) {
        const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
        const getParkingLot = new GetParkingLot(parkingLotRepositorySQL)
        const parkingLot = getParkingLot.execute(params.code)
        return parkingLot
    }
}