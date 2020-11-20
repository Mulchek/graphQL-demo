const { getClasses, getUser, getClassAttendees, addClass, modifyClass, removeClass } = require('./dataAccess')

const resolvers = {
  Query: {
    classes: (object, args, context, info) =>
      getClasses(args, context)
  },
  Mutation: {
    createClass: (object, args, context) =>
      addClass(args, context),
    updateClass: (object, args, context) => 
      modifyClass(args, context),
    deleteClass: (object, args, context) =>
      removeClass(args, context)
  },
  Class: {
    instructor: (object, args, context) => 
      getUser(object.instructorId, context),
    attendees  : (object, args, context) => 
      getClassAttendees(object.id, context)
  }
}

module.exports = {
  resolvers
}
