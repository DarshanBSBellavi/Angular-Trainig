import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  

  it('sum of add 2 number', () => {
    const calculator=new CalculatorService()
    let resullt=calculator.add(2,2)
    expect(resullt).toBeTruthy(4);
  });

  it(' difference  of 2 number', () => {
    const calculator=new CalculatorService()
    let resullt=calculator.sub(2,2)
    expect(resullt).toBeTruthy(0);
    
  });

});
