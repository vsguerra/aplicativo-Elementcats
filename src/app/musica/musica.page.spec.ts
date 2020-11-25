import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicaPage } from './musica.page';

describe('MusicaPage', () => {
  let component: MusicaPage;
  let fixture: ComponentFixture<MusicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
