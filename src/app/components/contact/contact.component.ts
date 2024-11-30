import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactInfo = {
    email: 'kouassimarcel@gmail.com',
    phone: '+225 07 77 38 63 97',
    linkedin: 'https://www.linkedin.com/in/marcel-olivier-kouassi-22466389/',
  };

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.initializeParticles();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const circles = this.elementRef.nativeElement.querySelectorAll('.circle');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circles.forEach((circle: HTMLElement, index: number) => {
      const speed = (index + 1) * 0.05;
      const x = (mouseX - window.innerWidth / 2) * speed;
      const y = (mouseY - window.innerHeight / 2) * speed;
      
      circle.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.05}deg)`;
    });
  }

  private initializeParticles() {
    const circles = this.elementRef.nativeElement.querySelectorAll('.circle');
    circles.forEach((circle: HTMLElement, index: number) => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      circle.style.left = `${randomX}px`;
      circle.style.top = `${randomY}px`;
    });
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Vous pouvez ajouter une notification de succès ici si vous le souhaitez
      console.log('Texte copié !');
    });
  }
}
