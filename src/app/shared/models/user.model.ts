export interface IUser {
    displayName: string,
    photoURL: string,
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
        state: {
            name: string,
            abbreviation: string,
        },
        zipcode: number
    }

}