import { CommonModule } from '@angular/common';
import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-distribution-channel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './distribution-channel.component.html',
  styleUrl: './distribution-channel.component.scss'
})
export class DistributionChannelComponent {



  showPopup = false;

  @ViewChild('inputField') inputField!: ElementRef<HTMLInputElement>;
  @ViewChild('copyButton') copyButton!: ElementRef<HTMLButtonElement>;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  copyText() {
    const inputElement = this.inputField.nativeElement;
    const copyButtonElement = this.copyButton.nativeElement;
    const field = inputElement.parentElement as HTMLElement;

    inputElement.select();
    if (document.execCommand('copy')) {
      if (field) {
        field.classList.add('active');
      }
      copyButtonElement.innerText = 'Copied';
      setTimeout(() => {
        window.getSelection()?.removeAllRanges();
        if (field) {
          field.classList.remove('active');
        }
        copyButtonElement.innerText = 'Copy';
      }, 3000);
    }
  }


  inputFields = [1]; // Deux champs de saisie initiaux

  addFields() {
    this.inputFields.push(this.inputFields.length + 1);
  }

  removeFields() {
    if (this.inputFields.length > 1) {
      this.inputFields.pop();
    }
  }

























}
