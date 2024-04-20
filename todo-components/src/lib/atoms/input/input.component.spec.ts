import { TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { debug } from 'jest-preview';

describe('AtomButtonComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();
    
  });

  it(`Se espera que el valor Size por default sea Medium'`, () => {
    const fixture = TestBed.createComponent(InputComponent);
    const inputComponet = fixture.componentInstance;
    inputComponet.type = 'text';
    const el: HTMLDivElement = fixture.nativeElement;
    console.log(el);
    
  });
});
