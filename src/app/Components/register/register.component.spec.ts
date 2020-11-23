import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserServiceService } from "../../Services/userservice/user-service.service";
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[ReactiveFormsModule,FormsModule],
      providers:[UserServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
