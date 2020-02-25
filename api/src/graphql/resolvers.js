import { mergeResolvers } from 'merge-graphql-schemas'
import { GraphQLDateTime } from 'graphql-iso-date'

import cardResolver from './resolvers/card-resolvers'

const customDateScalarResolver = { Date: GraphQLDateTime }

const resolvers = [cardResolver, customDateScalarResolver]

export default mergeResolvers(resolvers)