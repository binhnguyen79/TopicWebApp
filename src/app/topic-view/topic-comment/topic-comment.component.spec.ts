import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCommentComponent } from './topic-comment.component';

describe('TopicCommentComponent', () => {
  let component: TopicCommentComponent;
  let fixture: ComponentFixture<TopicCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
