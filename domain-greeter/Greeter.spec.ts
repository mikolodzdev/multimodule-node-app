import { expect } from 'chai';
import 'mocha';

import { Greeter } from './Greeter';

describe('Greeter.greet', () => {
    
      it('should return Ciao if IT as Param', () => {
        const result = new Greeter().greet('Stranger', 'IT');
        expect(result).to.equal('Ciao STRANGER');
      });
    
});