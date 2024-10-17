"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumesModule = void 0;
const common_1 = require("@nestjs/common");
const resumes_controller_1 = require("./resumes.controller");
const resumes_service_1 = require("./resumes.service");
let ResumesModule = class ResumesModule {
};
ResumesModule = __decorate([
    (0, common_1.Module)({
        controllers: [resumes_controller_1.ResumesController],
        providers: [resumes_service_1.ResumesService],
    })
], ResumesModule);
exports.ResumesModule = ResumesModule;
//# sourceMappingURL=resumes.module.js.map