import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { post } from 'selenium-webdriver/http';


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
     input.value='';
     this.service.createPost(post)
     .subscribe(response=>{
       //post[ 'id' ]=response;
       this.posts.splice(0,0,post);
       console.log(response);
      });
    }
    updatePost(post){
      this.service.updatePost(post)
      
      .subscribe(response=>{
        post=response;
        console.log(response);
      })

    }
    deletePost(post){
     this.service.deletePost(post.id)

      .subscribe(reponse=>{
        let index=this.posts.indexOf(post);
        this.posts.splice(index,1)

      })
    }
    ngOnInit() {
      this.service.getPosts()
      .subscribe(response => {
        this.posts=response;
        console.log(response);
      });

    }

}
