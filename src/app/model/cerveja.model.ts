import { FabricanteModel } from "./fabricantes.model"
import { FotoModel } from "./foto.model"
import { TipoCervejaModel } from "./tipoCerveja.model"
import { VolumeModel } from "./volume.model"

export class CervejaModel {
    id: number
	name: string
	price: any
	teorAlcool: any
	coloring: string
	addtionalInformation: string
	rating: number
	amount: number
	volume: VolumeModel    
    photos: FotoModel[]
	typeBeer: TipoCervejaModel
	volumeId: number
	typeBeerId: number
	manufacturer: FabricanteModel
	manufactureId: number
	photoURL1: string
}