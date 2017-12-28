"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const iterare_1 = require("iterare");
const constants_1 = require("@nestjs/common/constants");
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
class PipesProvider {
    constructor(config) {
        this.config = config;
    }
    createContext(instance, callback) {
        const classMetadata = this.reflectClassMetadata(instance, constants_1.PIPES_METADATA);
        const methodMetadata = this.reflectMethodMetadata(instance, callback, constants_1.PIPES_METADATA);
        return [
            ...this.createPipesContext(classMetadata),
            ...this.createPipesContext(methodMetadata),
        ];
    }
    createPipesContext(metadata) {
        if (shared_utils_1.isUndefined(metadata)) {
            return [];
        }
        return iterare_1.default(metadata).filter((pipe) => pipe.transform && shared_utils_1.isFunction(pipe.transform))
            .map((pipe) => pipe.transform.bind(pipe))
            .toArray();
    }
    reflectClassMetadata(instance, metadata) {
        const prototype = Object.getPrototypeOf(instance);
        return Reflect.getMetadata(metadata, prototype.constructor);
    }
    reflectMethodMetadata(instance, callback, metadata) {
        return Reflect.getMetadata(metadata, instance, callback.name);
    }
}
exports.PipesProvider = PipesProvider;
