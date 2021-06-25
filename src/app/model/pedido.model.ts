import { ItemsModel } from "./items.model"
import { UsuarioModel } from "./usuario.model"

export class PedidoModel {
	instant: any
    user: UsuarioModel
    address: any
    items: ItemsModel[]
}