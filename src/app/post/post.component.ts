import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { post } from 'selenium-webdriver/http';
import { AppError } from '../app-error';
import { NotFoundError } from './not-found-error';



@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 posts;

  constructor(private service: PostService ) {
   
  }
   createPost(input: HTMLInputElement){
     let post={ title: input.value };
     this.posts.splice(0,0,post);

     input.value='';

     this.service.create(post)
     .subscribe(newPost=>{
       //post[ 'id' ]=newPost.id;
       
       console.log(newPost);
     },(error:AppError)=>{
       this.posts.splice(0,1);

       if(error instanceof NotFoundError){
       //this.form.setErrors(error)
       }
       else throw error
       

       
      
 
     
      });
    }
    updatePost(post){
      this.service.update(post)
      
      .subscribe( updatedPost=>{
        post= updatedPost;
        console.log( updatedPost);
      });

    }
    deletePost(post){
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);

     this.service.delete(345)
     
      .subscribe(reponse=>{
        
      },
      (error: AppError)=>{
        if(error instanceof NotFoundError)
        alert('this post is deleted');
        

        else throw error;
       

      })
    }
    ngOnInit() {
      this.service.getAll()
      .subscribe(posts => this.posts=posts);

    }

}
