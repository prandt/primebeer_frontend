import { PerfisModel } from "./perfis.model"

export class UsuarioModel {
   
    id: number
    name: string
	email: string
	password: string
	birthDate: any
	street: string
	city: string
	state: string
	postalCode: string
    telefone1: string
	telefone2: string
	telefone3: string
	perfis: PerfisModel[]
}