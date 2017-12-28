import { NestContainer } from './injector/container';
import { MicroserviceConfiguration } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { INestMicroservice, WebSocketAdapter, CanActivate, PipeTransform, NestInterceptor, ExceptionFilter } from '@nestjs/common';
export declare class NestMicroservice implements INestMicroservice {
    private container;
    private readonly config;
    private readonly logger;
    private readonly microserviceConfig;
    private readonly server;
    private isTerminated;
    private isInitialized;
    constructor(container: NestContainer, config: MicroserviceConfiguration);
    setupModules(): void;
    setupListeners(): void;
    useWebSocketAdapter(adapter: WebSocketAdapter): void;
    useGlobalFilters(...filters: ExceptionFilter[]): void;
    useGlobalPipes(...pipes: PipeTransform<any>[]): void;
    useGlobalInterceptors(...interceptors: NestInterceptor[]): void;
    useGlobalGuards(...guards: CanActivate[]): void;
    listen(callback: () => void): void;
    close(): void;
    setIsInitialized(isInitialized: boolean): void;
    setIsTerminated(isTerminaed: boolean): void;
    private closeApplication();
    private callDestroyHook();
    private callModuleDestroyHook(module);
    private hasOnModuleDestroyHook(instance);
}
