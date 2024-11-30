import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedCategory: string = 'Tous';
  categories: string[] = ['Tous', 'Web', 'Mobile', 'Securite'];
  mouseX: number = 0;
  mouseY: number = 0;
  
  projects = [
    {
      title: 'Portfolio Personnel',
      description: 'Portfolio moderne développé avec Angular, mettant en valeur mes compétences et projets. Design élégant avec animations fluides et interface responsive.',
      image: 'assets/images/projects/default-project.webp',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
      category: 'Web'
    },
    {
      title: 'Système de Gestion de Stock',
      description: 'Système complet de gestion de stock avec Django, incluant gestion des produits, commandes, et reporting en temps réel.',
      image: 'assets/images/projects/default-project.webp',
      technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
      category: 'Web'
    },
    {
      title: 'Application de Livraison',
      description: 'Système complet de gestion d\'une structure de livraison, incluant gestion des livraisons, des clients, des livreurs, et reporting en temps réel.',
      image: 'assets/images/projects/default-project.webp',
      technologies: ['Laravel',  'PostgreSQL', 'Bootstrap'],
      liveLink: 'https://loslivraison.com',
      category: 'Web'
    },
    {
      title: 'Application Mobile E-commerce',
      description: 'Application mobile cross-platform développée avec Flutter pour une expérience shopping optimale.',
      image: 'assets/images/projects/default-project.webp',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      category: 'Mobile'
    },
    {
      title: 'Site vitrine d\'un cabinet',
      description: 'Site vitrine dynamique d\'un cabinet de consulting',
      image: 'assets/images/projects/default-project.webp',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'WebSocket'],
      liveLink: 'https://kgroupcs.com',
      category: 'Web'
    },
    {
      title: 'API REST Sécurisée',
      description: 'API REST robuste avec authentification JWT, gestion des rôles, et documentation Swagger complète.',
      image: 'assets/images/projects/default-project.webp',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'Web'
    },
    {
      title: 'Site de vente en ligne de maillots',
      description: 'Site de vente en ligne de maillots pour une entreprise de vente de maillots de football et de basketball.',
      image: 'assets/images/projects/default-project.webp',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
      liveLink: 'https://monmaillot.net',
      category: 'Web'
    },
    {
      title: 'Installation de pfSense',
      description: 'Installation et configuration de pare-feu pfSense pour une entreprise',
      image: 'assets/images/projects/default-project.webp',
      technologies: ['PfSense'],
      category: 'Securite'
    },
    {
      title: 'Pentest',
      description: 'Realisation de pentest sur une entreprise ayant developper une application web',
      image: 'assets/images/projects/default-project.webp',
      technologies: ['Kali Linux', 'Metasploit', 'OWASP'],
      category: 'Securite'
    }
  ];

  filteredProjects = this.projects;

  constructor() { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.mouseX = ((event.clientX - rect.left) / rect.width) * 100;
    this.mouseY = ((event.clientY - rect.top) / rect.height) * 100;
    
    this.updateBackgroundAnimation();
  }

  updateBackgroundAnimation() {
    const circles = document.querySelectorAll('.floating-circle');
    circles.forEach((circle, index) => {
      const speed = index + 1;
      const x = (this.mouseX - 50) * speed;
      const y = (this.mouseY - 50) * speed;
      (circle as HTMLElement).style.transform = 
        `translate(${x/10}px, ${y/10}px) rotate(${x/5}deg)`;
    });
  }

  ngOnInit(): void {
    // Ajouter une classe show aux cartes avec un délai
    setTimeout(() => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('show');
        }, index * 200);
      });
    }, 100);
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
    
    // Animation de transition pour les projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.classList.add('fade-out');
    });

    // Délai pour laisser l'animation se terminer avant de filtrer
    setTimeout(() => {
      if (category === 'Tous') {
        this.filteredProjects = this.projects;
      } else {
        this.filteredProjects = this.projects.filter(project => project.category === category);
      }

      // Réinitialiser l'animation après le filtrage
      setTimeout(() => {
        const newCards = document.querySelectorAll('.project-card');
        newCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.remove('fade-out');
            card.classList.add('fade-in');
          }, index * 100);
        });
      }, 50);
    }, 300);
  }
}
