import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // news contents to display
  newContent = [
    {
      title: "Chain Store Age",
      date: "Feb 22, 2016",
      titleDes: "Billabong taps NetSuite to power omnichannel strategy",
      image: 'bg9',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
      likeCount: 10
    },
    {
      title: "Business Wire",
      date: "Feb 18, 2016 ",
      titleDes: "New Study Shows One Critical Industry Lagging Behind in Software Security",
      image: 'bg2',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
      likeCount: 125
    },
    {
      title: "Business Wire",
      date: "Feb 13, 2016 ",
      titleDes: "AlphaGo and the Declining Advantage of Big Companies",
      image: 'bg3',
      description: "Panelists at CII's spring conference discuss governance implications of shift in US firms’ approach to capital allocation When it comes to uses of cash, investors are slightly schizophrenic about...",
      likeCount: 30
    },
    {
      title: "Chain Store Age",
      date: "Feb 13, 2016 ",
      titleDes: "Journelle, Alton Lane streamline process with NetSuite platform",
      image: 'bg4',
      description: 'Journelle, Alton Lane streamline process with NetSuite platform',
      likeCount: 45
    }
    ,
    {
      title: "Internet Retailer",
      date: "Feb 14, 2016 ",
      titleDes: "NetSuite rolls out a new e-procurement system for B2B companies",
      image: 'bg8',
      description: 'Katherine BoccaccioNetSuite Inc. announced that two fashion and apparel retailers — Journelle, a seller of high-end lingerie and loungewear, and Alton Lane, a maker of men’s custom-tailored...',
      likeCount: 490
    }
    ,
    {
      title: "The Wall Street Journal",
      date: "Feb 13, 2016 ",
      titleDes: "NetSuite to Buy Email Marketing Company for $200 Million",
      image: 'bg9',
      description: "It's been 25 years since Professor Jeffrey Sonnenfeld's landmark book The Hero's Farewell vividly documented the challenges and failures of CEO succession planning at large publicly traded...",
      likeCount: 75
    }


  ]

  constructor() { }

  ngOnInit() {
  }

}
