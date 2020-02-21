const { getClasses, getUser, getClassAttendees, createClass } = require('./dataAccess')

const resolvers = {
  Query: {
    classes: (parent, args, context, info) =>
      getClasses(args, context)
  },
  Mutation: {
    addClass: (parent, args, context) =>
      createClass(args, context),
  },
  Class: {
    instructor: (parent, args, context) => 
      getUser(parent.instructorId, context),
    attendees  : (parent, args, context) => 
      getClassAttendees(parent.id, context)
  }
}

module.exports = {
  resolvers
}
