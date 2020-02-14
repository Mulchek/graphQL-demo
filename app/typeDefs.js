const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    classes(limit: Int offset: Int): [Class]
  }

  type Mutation {
    addClass(class: NewClass!): Class
  }

  type Class {
    id: ID
    title: String
    description: String
    instructor: User
    attendees: [User]
  }

  input NewClass {
    title: String!
    description: String    
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    emailAddress: String
    role: String
  }
`;

module.exports = {
    typeDefs
}