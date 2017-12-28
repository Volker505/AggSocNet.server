import 'reflect-metadata';
import { Controller } from '@nestjs/common/interfaces';
import { ApplicationConfig } from './../application-config';
export declare type Transform<T> = (value: T) => any;
export interface NestPipe<T> {
    transform: Transform<T>;
}
export declare abstract class ContextCreator {
    private readonly config;
    constructor(config: ApplicationConfig);
    abstract createConcreteContext<T extends any[], R extends any[]>(metadata: T): R;
    createContext<T extends any[], R extends any[]>(instance: Controller, callback: (...args) => any): R;
    reflectClassMetadata<T>(instance: Controller, metadata: string): T;
    reflectMethodMetadata<T>(instance: Controller, callback: (...args) => any, metadata: string): T;
}
export declare class PipesContextCreator extends ContextCreator {
    createConcreteContext(metadata: NestPipe<any>[]): Transform<any>[];
}
