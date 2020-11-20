const users = [
  {
    id: 1,
    firstName: 'Andy',
    lastName: 'Mulchek',
    emailAddress: 'andrew.mulchek@daugherty.com',
    classes: [2]
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Smith',
    emailAddress: 'Bob.Smith@daugherty.com',
    classes: [1,2,3]
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Doe',
    emailAddress: 'John.Doe@daugherty.com',
    classes: [1,3]
  },
  { 
    id: 4,
    firstName: 'Jane',
    lastName: 'Williams',
    emailAddress: 'Jane.Williams@daugherty.com',
    classes: [3]
  },
  {  
    id: 5,
    firstName: 'Ron',
    lastName: 'Daugherty',
    emailAddress: 'Ron.Daugherty@daugherty.com',
    classes: [1,2,3]
  }
]
  
const classes = [
  {
    id: 1,
    title: 'Introduction to GraphQL',
    description: 'This class is intended as an introduction to GraphQL. We will explore what GraphQL is and why you may want to use it in your next API. We will also explore the GraphQL query language and walk through a demo GraphQL API.',
    instructorId: 1,
    isActive: true
  },
  {
    id: 2,
    title: 'Introduction to MySQL Query Optimization',
    description: 'This LnL introduces Query Optimization. What is MySql query optimization? What are the benefits of query optimization and the different tools available to help optimize a query. We will also discuss the differences between relational and non relational database query optimization. If you\'re interested in making your queries perform at optimal level or just interested in learning something new, please join us for this LnL.',
    instructorId: 2,
    isActive: true
  },
  {
    id: 3,
    title: 'Introduction to Redshift Stored Procedures',
    description: 'Have you heard? Redshift now has Stored Procedure capabilities! If you are interested in getting an introduction into the AWS Redshift Stored Procedure capabilities and how they are being leveraged at Georgia Pacific, then this is the LnL for you.  This class is for anyone (all LOS) who either has interest in learning what stored procedures are or knows and is interested in how a cloud-based database system utilizes this functionality to streamline data movement and transformation.',
    instructorId: 3,
    isActive: true
  }
]

module.exports = {
  classes,
  users
}
  