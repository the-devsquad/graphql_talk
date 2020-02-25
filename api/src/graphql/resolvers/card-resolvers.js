import Card from '../../models/Card'

export default {
  Query: {
    cards: (parent, args) => Card.find(),
    card: (parent, { id }) => Card.findById({ _id:id })
  },

  Mutation: {
    createCard: (parent, { description, color }) => {
      const card = Card({ description, color })
      return card.save()
    },

    deleteCard: async (parent, { id }) => {
      const res = await Card.deleteOne({ _id: id })
      console.log(res)
    }
  }
}