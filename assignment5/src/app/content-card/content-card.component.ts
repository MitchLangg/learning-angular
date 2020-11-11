import { Component, OnInit } from '@angular/core';

import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  display: string;

  content1: Content = {
    id: 0,
    author: 'Mitch Lang',
    imgUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3di6ShYSC2mSwfvgamkxmvPcEUo_31Goerb5i1TofPI0sqLlleE19r-saOZhRiu0kdqOujaEmdYRREhhraoj40BcChz34Te1CLJ9L6c9E8u9LSB36mu--jz3iwvbq05m-nfpgjdBWk4A83im6UfeTA=w1400-h700-no?authuser=0',
    type: 'Anime',
    title: 'Content #1',
    body: 'This is the first piece of content.',
    tags: ['One Piece']
  };

  content2: Content = {
    id: 1,
    author: 'Noah Robinson',
    imgUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3d6Yp2iQdez8USyiCmy3WgpinsFrzxdDKdUIjxPCKIwmdHourSR2NRgCKlE04Kb3j_gPUSVGNQk19-h4eYaG5LqtmwydG29QphHrs2nhZx-S0D96CbzN8bBGvmOdgKW8YVhIdOPF2Nogor4xkqHFHM=s680-no?authuser=0',
    type: 'Planets',
    title: 'Content #2',
    body: 'This is the second piece of content.',
    tags: ['Earth']
  };

  content3: Content = {
    id: 2,
    author: 'Quinn VanderHoeven',
    imgUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cU74Z_4-a1WHPMQvVdRmSya91modl1jSbTrQQDD-UnF4xIIZgFX1Ezz3J2upuvf4JQHr8xyDxkFqyBmG5h9OSecLrKRlZkLugXePWaLk1mnLkkj9zXgv2o_KgxF8BPnjISqT1EZdRydkL-OWawv3M=w1723-h969-no?authuser=0',
    type: 'Cameras',
    title: 'Content #3',
    body: 'This is the third piece of content.',
    tags: ['Camera']
  };



  constructor() {
    /*
    this.contentList.add(this.content1);
    this.contentList.add(this.content2);
    this.contentList.add(this.content3);
    this.display = this.contentList.contentProperties(0) + this.contentList.contentProperties(1) + this.contentList.contentProperties(2);
  */
  }
  ngOnInit(): void {
  }

}
