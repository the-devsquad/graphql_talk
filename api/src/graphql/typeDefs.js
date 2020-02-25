import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import * as path from 'path'

const typesArray = fileLoader(path.join(__dirname, './typeDefs'))

export default mergeTypes(typesArray, { all: true })
