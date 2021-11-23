import {gql} from 'apollo-server-express'
import { tiposEnums } from '../models/enums/tipos';

const tiposGlobales = gql`

    scalar Date

`;

export const tipos = [tiposGlobales,tiposEnums]