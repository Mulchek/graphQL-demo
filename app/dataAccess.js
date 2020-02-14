const getClasses = ({limit = 50, offset = 0}, context) => {
  return context.classes.slice(offset, limit + offset)
}

const getUser = (id, context) => {
  return context.users.find(user => user.id == id)
}

const getClassAttendees = (classId, context) => {
  return context.users.filter(user => user.classes.includes(classId))
}

const createClass = (args, context) => {
  args.class.id = Math.max.apply(Math, context.classes.map( function(o) { return o.id; })) + 1
  context.classes.push(args.class)
  return args.class
}

module.exports = {
  getClasses,
  getUser, 
  getClassAttendees,
  createClass
}