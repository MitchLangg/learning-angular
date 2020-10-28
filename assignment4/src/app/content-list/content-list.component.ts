import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
export class FilterClass implements PipeTransform{
  transform(content: Content[], type: string): any{
    return content.filter(p => p.type.includes(type));
  }
}

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent implements OnInit {
  displayId: number;
  output = '';
  originalTitle = '';
  public array = new Array <Content>();
  constructor() {
    this.array = [{
      id: 0,
      author: 'Mitch Lang',
      imgUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3di6ShYSC2mSwfvgamkxmvPcEUo_31Goerb5i1TofPI0sqLlleE19r-saOZhRiu0kdqOujaEmdYRREhhraoj40BcChz34Te1CLJ9L6c9E8u9LSB36mu--jz3iwvbq05m-nfpgjdBWk4A83im6UfeTA=w1400-h700-no?authuser=0',
      type: 'Anime',
      title: 'Content #1',
      body: 'This is the first piece of content.',
      tags: ['One Piece']},
      {
        id: 1,
        author: 'Noah Robinson',
        imgUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3d6Yp2iQdez8USyiCmy3WgpinsFrzxdDKdUIjxPCKIwmdHourSR2NRgCKlE04Kb3j_gPUSVGNQk19-h4eYaG5LqtmwydG29QphHrs2nhZx-S0D96CbzN8bBGvmOdgKW8YVhIdOPF2Nogor4xkqHFHM=s680-no?authuser=0',
        type: 'Planets',
        title: 'Content #2',
        body: 'This is the second piece of content.',
        tags: ['Earth']},
      {
        id: 2,
        author: 'Quinn VanderHoeven',
        imgUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cU74Z_4-a1WHPMQvVdRmSya91modl1jSbTrQQDD-UnF4xIIZgFX1Ezz3J2upuvf4JQHr8xyDxkFqyBmG5h9OSecLrKRlZkLugXePWaLk1mnLkkj9zXgv2o_KgxF8BPnjISqT1EZdRydkL-OWawv3M=w1723-h969-no?authuser=0',
        type: 'Cameras',
        title: 'Content #3',
        body: 'This is the third piece of content.',
        tags: ['Camera']},
      {
        id: 3,
        author: 'Grace Dalimonte',
        imgUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3erugTRezyM1DPG82WKSEXB5Qh4McBj2hEMpAMeDP4PTswbjl8gPPvZyUWqQyKyslU9uoQ1BblAICD0_gpYopJhURF4hMmYgdmutPr3y_21VsaoZ6o6RXUWARfX5F_NMRMeYvkFVAB6bnSk317eIGU=s480-no?authuser=0',
        type: 'Plants',
        title: 'Content #4',
        body: 'This is the fourth piece of content.',
        tags: ['Plant']},
      {
        id: 4,
        author: 'Keely Wright',
        imgUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3e6XAfL1n9AxxhZ6U6jlXLeNrZiLBiZo8Ye0u72lee98JkC-qzys9pMlI99dlkfkKuc1JQUV-uMMiHYfe6_AGdmGD76MOdcjlIfmzrWY3iHvOCN35vZCyILSzeOPYoVz_xYq7S-oeYUyj3vyznJ6ws=w1100-h825-no?authuser=0',
        type: 'Starbucks',
        title: 'Content #5',
        body: 'This is the fifth piece of content.',
        tags: ['Starbucks']
    }];
  }
  public titleCheck(input: string): any {
    if (this.array.filter(p => p.title.toLowerCase().includes(input.toLowerCase())).length !== 0) {
      this.output = 'That an existing title!';
    }else {
      this.output = 'Not an existing title :(';
    }
  }

  public clickForId(item: Content): void {
    this.displayId = item.id;
    console.log(this.displayId);
  }
  ngOnInit(): void {
  }
}
