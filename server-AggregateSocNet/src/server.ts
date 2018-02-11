import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './app/app.module';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';
import * as path from 'path';
import * as express from 'express'
import * as serveStatic from 'serve-static'
import * as bodyParser from 'body-parser';

async function bootstrap() {
    const ex = express();
    ex.use(serveStatic(path.join(__dirname, '../../../client/dist')));
    const app = await NestFactory.create(ApplicationModule, ex);
    app.use(bodyParser.json());
    app.setGlobalPrefix('api');
    app.use((req, res, next) => {
        if (req.originalUrl.startsWith('/api')) {
            next();
        }
        else {
            res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
        }
    });
    await app.listen(8081, () => console.log('server Run'));
}
bootstrap();
