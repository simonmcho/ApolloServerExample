import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = [`
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    type Query {
        allCourses: [Course]
        course(id: Int!): Course
    }
`]; //definition of types of our schema

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;