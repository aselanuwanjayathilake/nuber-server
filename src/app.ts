import express from 'express';
import { createYoga } from 'graphql-yoga';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors'
import schema from './schema';

export function buildApp(app: ReturnType<typeof express>) {
    const graphQLServer = createYoga({
        schema,
        logging: false,
    });

    app.use(graphQLServer.graphqlEndpoint, graphQLServer);

    app.use(logger('dev'));
    app.use(helmet());
    app.use(cors());

    return graphQLServer.graphqlEndpoint;
}