import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  // Esta classe pode ser expandida com lógica adicional conforme necessário
  courses = [
    {
      title: 'Angular - The Complete Guide',
      provider: 'Udemy',
      date: '2023',
      description: 'Curso completo sobre desenvolvimento com Angular, abordando componentes, diretivas, serviços, observables e mais.',
      certificateUrl: 'https://exemplo.com/certificado-angular',
      skills: ['Angular', 'TypeScript', 'RxJS']
    },
    {
      title: 'Java Programming Masterclass',
      provider: 'Coursera',
      date: '2022',
      description: 'Curso avançado de programação Java cobrindo POO, estruturas de dados, padrões de design e desenvolvimento de aplicações.',
      certificateUrl: 'https://exemplo.com/certificado-java',
      skills: ['Java', 'POO', 'Spring']
    },
    {
      title: 'Web Development Bootcamp',
      provider: 'Digital Innovation One',
      date: '2022',
      description: 'Bootcamp intensivo focado em desenvolvimento web com HTML, CSS, JavaScript e ferramentas modernas.',
      certificateUrl: 'https://exemplo.com/certificado-web',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Banco de Dados SQL e NoSQL',
      provider: 'Alura',
      date: '2021',
      description: 'Formação completa em bancos de dados relacionais e não-relacionais, abordando modelagem, otimização e administração.',
      certificateUrl: 'https://exemplo.com/certificado-bd',
      skills: ['SQL', 'MongoDB', 'Firebase']
    }
  ];
}
