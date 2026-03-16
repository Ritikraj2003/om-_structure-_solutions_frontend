import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Luxury Villa Construction in Patna',
      category: 'Residential',
      location: 'In Patna',
      image: ''
    },
    {
      id: 2,
      title: 'Modern Duplex House in Rajgir',
      category: 'Residential',
      location: 'In Rajgir',
      image: ''
    },
    {
      id: 3,
      title: 'Retail Store Construction in Patna',
      category: 'Commercial',
      location: 'In Patna',
      image: ''
    },
    {
      id: 4,
      title: 'Office Building in Patna',
      category: 'Commercial',
      location: 'In Patna',
      image: ''
    },
    {
      id: 5,
      title: 'Apartment Construction in Gaya',
      category: 'Residential',
      location: 'In Gaya',
      image: ''
    },
    {
      id: 6,
      title: 'Shopping Mall Project in Patna',
      category: 'Commercial',
      location: 'In Patna',
      image: ''
    },
    {
      id: 7,
      title: 'School Building in Nalanda',
      category: 'Commercial',
      location: 'In Nalanda',
      image: ''
    },
    {
      id: 8,
      title: 'Farm House Construction in Bihar',
      category: 'Residential',
      location: 'In Bihar',
      image: ''
    },
    {
      id: 9,
      title: 'Hospital Building in Patna',
      category: 'Commercial',
      location: 'In Patna',
      image: ''
    },
    {
      id: 10,
      title: 'Bridge Construction Project',
      category: 'Commercial',
      location: 'In Bihar',
      image: ''
    }
  ];

  currentPage = 1;
  itemsPerPage = 4;

  get totalPages() {
    return Math.ceil(this.projects.length / this.itemsPerPage);
  }

  get paginatedProjects() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.projects.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get pages() {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
