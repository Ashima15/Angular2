import { Component } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
    providers: [PostService]
})

export class UserComponent  { 
    name : string;
    email : string;
    address : address;
    hobbies : string[];
    showHobbies : boolean;
    posts: Post[];
    
    constructor(private postService: PostService){
        this.name = 'John Doe'; 
        this.email = 'john@gmail.com';
        this.address ={
            street : '12 main street',
            city : 'Boston',
            state : 'NA'
        }
        this.hobbies = ['Music', 'Sleeping', 'Dancing'];
        this.showHobbies = false;
        
        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
    
    toggleHobbies(){
        if(this.showHobbies == true){
            this.showHobbies = false;
        }
        else{
            this.showHobbies = true;
        } 
    }
    
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    
    deleteHobby(i){
        this.hobbies.splice(i, 1);
    }
}

interface address {
    street : string;
    city : string;
    state : string;
}

interface Post{
    id: number;
    name: string;
    email: string;
    address: {
        street : string,
        city : string
    }
}