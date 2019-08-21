import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';
import { AppErrorHandler } from './app-error-handler';
import { GitFollowComponent } from './git-follow/git-follow.component';
import { GitFollowService } from './git-follow.service';
import{ RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostComponent,
    GitFollowComponent,
    HomeComponentComponent,
    NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:'',component: HomeComponentComponent
    },
    {
      path:'change-password',component: ChangePasswordComponent
    },
    {
      path:'posts',component: PostComponent
    },
    {
      path:'contactMethod',component:ContactFormComponent

    }
  ])
  

  ],
  providers: [
    PostService,
    GitFollowService,
    { provide:ErrorHandler,useClass:AppErrorHandler }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
