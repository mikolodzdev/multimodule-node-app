'use strict'
import { Greeter } from './../domain-greeter/Greeter';
import { Express } from 'express';

export class RestApi {
    constructor(private greeterDomain: Greeter) {
    }

    initRoutes(app: Express) {
        app.get('/', (req, res) => {
            res.send(this.greeterDomain.greet('Michal', req.query.lang));
        })
    }
}