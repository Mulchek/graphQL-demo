const getClasses = ({limit = 50, offset = 0, isActive}, context) => {
  let events = context.classes
  if (isActive) {
    events = events.filter((event) => event.isActive)
  }

  return events.slice(offset, limit + offset)
}

const getUser = (id, context) => {
  return context.users.find(user => user.id == id)
}

const getClassAttendees = (classId, context) => {
  return context.users.filter(user => user.classes.includes(classId))
}

const addClass = (args, context) => {
  const id = Math.max.apply(Math, context.classes.map( function(o) { return o.id; })) + 1
  context.classes.push({ id, title: args.class.title, description: args.class.description, isActive: true })
  args.class.id = id
  return args.class
}

const modifyClass = (args, context) => {
  const event = context.classes.find(event => event.id == args.id)

  if (args.class.title) {
    event.title = args.class.title
  }

  if (args.class.description) {
    event.description = args.class.description
  }

  return event
}

const removeClass = (args, context) => {
  const event = context.classes.find(event => event.id == args.id)
  event.isActive = false
  return event
}

module.exports = {
  getClasses,
  getUser, 
  getClassAttendees,
  addClass,
  modifyClass,
  removeClass
}