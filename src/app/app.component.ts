import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pdfSrc: string;
  error: any;
  page: number = 1;
  zoom: number = 1.0;
  originalSize: boolean = false;
  pdf: any;
  renderText: boolean = true;
  progressData;
  isLoaded: boolean = false;
  stickToPage = false;
  showAll: boolean = false;
  autoresize: boolean = true;
  isPdfViewerVisible: boolean = false;

  incrementPage(amount: number) {
    this.page += amount;
  }

  incrementZoom(amount: number) {
    this.zoom += amount;
  }

  onFileSelected() {
    const file: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer(file.files[0]);
    }
  }

  afterLoadComplete(pdf) {
    this.pdf = pdf;
    this.isLoaded = true;
  }

  onError(error: any) {
    this.error = error;
  }

  onProgress(progressData) {
    this.progressData = progressData;
    this.isLoaded = false;
    this.error = null; // clear error
  }

  getInt(value: number): number {
    return Math.round(value);
  }
}
