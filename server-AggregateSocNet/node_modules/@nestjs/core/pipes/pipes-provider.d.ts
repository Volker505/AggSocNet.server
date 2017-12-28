import 'reflect-metadata';
import { Controller } from '@nestjs/common/interfaces';
import { ApplicationConfig } from './../application-config';
export declare type Transform<T> = (value: T) => any;
export interface NestPipe<T> {
    transform: Transform<T>;
}
export declare class PipesProvider {
    private readonly config;
    constructor(config: ApplicationConfig);
    createContext(instance: Controller, callback: (...args) => any): Transform<any>[];
    createPipesContext(metadata: NestPipe<any>[]): Transform<any>[];
    reflectClassMetadata<T>(instance: Controller, metadata: string): T;
    reflectMethodMetadata<T>(instance: Controller, callback: (...args) => any, metadata: string): T;
}
