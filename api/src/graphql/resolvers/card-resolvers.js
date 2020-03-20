import Card from '../../models/Card'

export default {
  Query: {
    cards: (parent, args) => Card.find(),
    card: (parent, { id }) => Card.findById({ _id: id })
  },

  Mutation: {
    createCard: (parent, { description, color }) => {
      const card = Card({ description, color, done: false })
      return card.save()
    },

    deleteCard: async (parent, { id }) => {
      const res = await Card.deleteOne({ _id: id })
    },

    doneCard: async (parent, { id }) => {
      const res = await Card.updateOne({ _id: id }, { $set: { done: true } })
    }
  }
}
