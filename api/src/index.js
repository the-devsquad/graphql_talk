import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true
}

app.use(cors(corsOptions))
app.use(cookieParser())

dotenv.config()

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('📡  DB Connected!'))
  .catch(err => console.error(err))

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  cors: false
})

apolloServer.applyMiddleware({ app, path: '/graphql', cors: false })

app.use('/', (req, res, next) => {
  res.send({ message: 'BACK-END IS UP!' })
})

const httpServer = app.listen(PORT, () => {
  console.log(
    `🔥 🤘  Server's ready to rock at http://localhost:${PORT}${apolloServer.graphqlPath}  🎸 🔥`
  )
})

apolloServer.installSubscriptionHandlers(httpServer)
