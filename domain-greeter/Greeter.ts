'use strict';

import common from '../common';

let greetInEN = function (name: string): string {
    return 'Hello ' + common.toUpperCase(name);
};

let greetInDE = function (name: string): string {
    return 'Hallo ' + common.toUpperCase(name);
};

let greetInIT = function (name: string): string {
    return 'Ciao ' + common.toUpperCase(name);
};

export class Greeter {
    
        constructor() {    
        }
    
        greet = function (name: string, lang: string) {
            switch (lang) {
                case 'DE':
                    return greetInDE(name);
                case 'IT':
                    return greetInIT(name);
                default:
                    return greetInEN(name);
            }
        }
    };