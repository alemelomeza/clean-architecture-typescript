export default class ParkingLot {
    code: string
    capacity: number
    openHour: number
    closeHour: number
    occupiedSpaces: number
    
    constructor (code: string, capacity: number, openHour: number, closeHour: number, occupiedSpaces: number) {
        this.code = code
        this.capacity = capacity
        this.openHour = openHour
        this.closeHour = closeHour
        this.occupiedSpaces = occupiedSpaces
    }

    isOpen (date: Date): Boolean {
        const hour = date.getHours()
        return (hour >= this.openHour && hour <= this.closeHour)
    }

    ifFull (): Boolean {
        return this.capacity === this.occupiedSpaces
    }
}