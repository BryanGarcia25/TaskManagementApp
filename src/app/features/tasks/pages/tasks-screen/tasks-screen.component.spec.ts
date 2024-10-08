import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksScreenComponent } from './tasks-screen.component';

describe('TasksScreenComponent', () => {
  let component: TasksScreenComponent;
  let fixture: ComponentFixture<TasksScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
