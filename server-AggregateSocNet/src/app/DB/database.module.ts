import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providerse';


@Module({
    components:[...databaseProviders],
    exports:[...databaseProviders],
    }
)
export class DatabaseModule{}