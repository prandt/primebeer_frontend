import { CervejaModel } from "./cerveja.model"
import { PedidoModel } from "./pedido.model"

export class ItemsModel {
    amount: number
    beer: CervejaModel
    cart: PedidoModel
}