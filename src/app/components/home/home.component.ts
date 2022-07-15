import { Component, OnInit } from '@angular/core';
import { JokeModel } from 'src/app/models/joke-model.model';
import { AuthService } from 'src/app/services/auth.service';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedJoke!: JokeModel

  constructor(private jokeApi: JokeService, private auth: AuthService) { }

  ngOnInit(): void {
    this.onGetJoke()
  }
  
  onGetJoke() {
    this.jokeApi.getJoke().subscribe((data: JokeModel) => {
      this.displayedJoke = data;
      console.log(this.displayedJoke)
    });
  }

}
