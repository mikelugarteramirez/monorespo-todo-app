import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('AtomButtonComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
  });

  it(`Se espera que el valor Size por default sea Medium'`, () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const button = fixture.componentInstance;
    expect(button.size).toEqual('medium');
  });
});
