import {Schema,model} from 'mongoose'
import { ProjectModel } from '../proyecto/project'
import { UserModel } from '../usuario/user'

interface Avance{
    fecha:Date,
    descripcion:string,
    observaciones:[string],
    proyecto:Schema.Types.ObjectId,
    creadoPor:Schema.Types.ObjectId
}


const avanceSchema = new Schema<Avance>({
    fecha:{
        type:Date,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    observaciones:[
        {
            type:String
        }
    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
        required:true
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref:UserModel,
        required:true
    }
})

export const AvanceModel = model("Avance",avanceSchema,"avances")