const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    classes(limit: Int offset: Int isActive: Boolean): [Class]
  }

  type Mutation {
    createClass(class: NewClass!): Class
    updateClass(id: ID! class: UpdateClass!): Class
    deleteClass(id: ID!): Class
  }

  type Class {
    id: ID
    title: String
    description: String
    isActive: Boolean
    instructor: User
    attendees: [User]
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    emailAddress: String
    role: String
  }
  
  input NewClass {
    title: String!
    description: String    
  }

  input UpdateClass {
    title: String
    description: String    
  }

`;

module.exports = {
    typeDefs
}