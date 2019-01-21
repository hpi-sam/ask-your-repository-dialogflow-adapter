import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { config } from 'dotenv';


config();
chai.should();
chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;
