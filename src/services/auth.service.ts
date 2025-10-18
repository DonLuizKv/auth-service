import { user } from "../types/general"

export class Service {
    constructor() { }

    Login(data: Omit<user, "email">) {
        console.log(data)
    }

    Register() {

    }
}