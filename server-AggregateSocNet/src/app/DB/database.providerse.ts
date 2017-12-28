import * as mongoose from 'mongoose';
import {async} from 'rxjs/scheduler/async';
import {Observable} from 'rxjs/Observable';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;// promise
            return await mongoose.connect('mongodb://localhost/aggregateSocNet',{ useMongoClient: true});
                // { useMongoClient: true});//

        }
    }
];