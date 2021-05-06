import ParkingLot from "../entity/ParkingLot";

export default interface ParkingLotRepository {
    gerParkingLot(code: string): Promise<ParkingLot>
    saveParkedCar(code: string, plate: string, date: Date): void
}