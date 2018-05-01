'use strict';

import common from '../common';

let greetInEN = function (str: string): string {
    return 'Hello ' + common.toUpperCase(str);
};

let greetInDE = function (str: string): string {
    return 'Hallo ' + common.toUpperCase(str);
};

let greetInIT = function (str: string): string {
    return 'Ciao ' + common.toUpperCase(str);
};

export class Greeter {
    
        constructor() {    
        }
    
        greet = function (str: string, lang: string) {
            switch (lang) {
                case 'DE':
                    return greetInDE(str);
                case 'IT':
                    return greetInIT(str);
                default:
                    return greetInEN(str);
            }
        }
    };