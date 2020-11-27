import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriacaoPage } from './criacao.page';

describe('CriacaoPage', () => {
  let component: CriacaoPage;
  let fixture: ComponentFixture<CriacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
