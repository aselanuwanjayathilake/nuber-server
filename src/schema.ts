import { GraphQLSchema } from "graphql";
import { fileLoader } from "merge-graphql-schemas";
import path from "path";
import { createSchema } from 'graphql-yoga';

const allTypes: GraphQLSchema[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql")
);

const allResolvers: any[] = fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*")
);

const schema = createSchema({
    typeDefs: allTypes,
    resolvers: allResolvers
})

export default schema;