export interface IUser {
    name: {
        first: string,
        middle: string,
        last: string
    },
    phone: number,
    address: {
        line1: string,
        line2: string,
        city: string,
        state: string,
        zipcode: number
    }

}