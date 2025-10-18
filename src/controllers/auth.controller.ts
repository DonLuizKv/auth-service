import { Request, Response } from "express";
import { Service } from "../services/auth.service";
import { user } from "../types/general";

const service = new Service();

export const login = (req: Request, res: Response) => {
    try {
        // const { username, password } = req.body as use;

        const petition = service.Login({ username: "", password: "" })

        res.status(200).send("Se ha logueado con exito")

    } catch (error) {
        res.status(400).send("Error " + error)
    }
};

export const register = (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

    } catch (error) {

    }
};