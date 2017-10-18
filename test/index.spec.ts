import Mocha from 'mocha';
import chai, { expect } from 'chai';

import { helloWorld } from '../src/index';

describe('Initial Tests', () => {
    it('should return Hello World', () => expect(helloWorld()).to.equal('Hello World'));
});