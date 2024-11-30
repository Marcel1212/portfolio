import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  technologies = [
    {
      name: 'Angular',
      icon: 'assets/icons/angular.svg'
    },
    {
      name: 'Django',
      icon: 'assets/icons/django.svg'
    },
    {
      name: 'Laravel',
      icon: 'assets/icons/laravel.svg'
    },
    {
      name: 'Node.js',
      icon: 'assets/icons/nodejs.svg'
    },
    // {
    //   name: 'TypeScript',
    //   icon: 'assets/icons/typescript.svg'
    // },
    {
      name: 'Python',
      icon: 'assets/icons/python.svg'
    },
    {
      name: 'Sécurité',
      icon: 'assets/icons/security.svg'
    }
  ];

  greeting: string = '';

  constructor() { }

  ngOnInit(): void {
    this.updateGreeting();
  }

  private updateGreeting(): void {
    const hour = new Date().getHours();
    this.greeting = hour >= 18 || hour < 5 ? 'Bonsoir' : 'Bonjour';
  }
}
