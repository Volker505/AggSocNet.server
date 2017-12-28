"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io_adapter_1 = require("@nestjs/websockets/adapters/io-adapter");
class ApplicationConfig {
    constructor() {
        this.globalPipes = [];
        this.globalFilters = [];
        this.globalInterceptors = [];
        this.globalGuards = [];
        this.ioAdapter = new io_adapter_1.IoAdapter();
        this.globalPrefix = '';
    }
    setGlobalPrefix(prefix) {
        this.globalPrefix = prefix;
    }
    getGlobalPrefix() {
        return this.globalPrefix;
    }
    setIoAdapter(ioAdapter) {
        this.ioAdapter = ioAdapter;
    }
    getIoAdapter() {
        return this.ioAdapter;
    }
    useGlobalPipes(...pipes) {
        this.globalPipes = pipes;
    }
    getGlobalFilters() {
        return this.globalFilters;
    }
    useGlobalFilters(...filters) {
        this.globalFilters = filters;
    }
    getGlobalPipes() {
        return this.globalPipes;
    }
    getGlobalInterceptors() {
        return this.globalInterceptors;
    }
    useGlobalInterceptors(...interceptors) {
        this.globalInterceptors = interceptors;
    }
    getGlobalGuards() {
        return this.globalGuards;
    }
    useGlobalGuards(...guards) {
        this.globalGuards = guards;
    }
}
exports.ApplicationConfig = ApplicationConfig;
