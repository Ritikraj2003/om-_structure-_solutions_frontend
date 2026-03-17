import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

  formData = {
    fullName: '',
    email: '',
    position: 'Structural Engineer',
    message: ''
  };

  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    const submissionData = {
      ...this.formData,
      uploadedFile: this.selectedFile ? {
        name: this.selectedFile.name,
        type: this.selectedFile.type,
        size: this.selectedFile.size,
        fileRef: this.selectedFile
      } : null
    };

    console.log('--- Form Application Data ---');
    console.log(submissionData);
    console.log('-----------------------------');
  }

}
