import {gql} from 'apollo-server-express';

export const tiposAvance = gql`
type Avance {
    fecha:Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
}

type Query{
    Avances: [Avance]
}

type Mutation{
    crearAvance(
        fecha:Date!
        descripcion: String!
        proyecto: String!
        creadoPor: String!
    ): Avance
}
`;

// export {tiposAvance};