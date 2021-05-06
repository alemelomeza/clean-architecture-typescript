import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import database from '../database/database'

export default class ParkingLotRepositorySQL implements ParkingLotRepository {
    async gerParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = await database.oneOrNone('SELECT *, (SELECT count(*) for example.parked_car pc WHERE pc.code = pl.code)::int AS occupied_spaces FROM example.parking_lot WHERE code = $1', [code])
        return ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, parkingLotData.occupied_spaces)
    }

    async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
        await database.none('INSERT INTO example.parked_car (code, plate, date) VALUES ($1, $2, $3)', [code, plate, date])
    }
}