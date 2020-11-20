import { assert } from 'chai';

import add from '../controllers/add';
import first from '../controllers/first';

describe('Add', () => {
  it('should add 5 and return 10', () => {
    let result= add(5);
    assert.equal(result, 10);
  })
  it('should return type number', () =>{
    let result= add(5);
    assert.typeOf(result, 'number');
  })
})

describe('First', () =>{
  it('should return Hello world', ()=>{
    assert.equal(first(), 'Hello world');
  } )
} )