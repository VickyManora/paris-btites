import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ModalConfig {
  title: string;
  message?: string;
  type: 'input' | 'confirm';
  inputPlaceholder?: string;
  confirmText?: string;
  cancelText?: string;
  inputValue?: string;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() config: ModalConfig = {
    title: '',
    type: 'confirm',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  };
  
  @Input() isOpen: boolean = false;
  @Output() onConfirm = new EventEmitter<string | boolean>();
  @Output() onCancel = new EventEmitter<void>();

  inputValue: string = '';

  ngOnChanges(): void {
    if (this.isOpen) {
      this.inputValue = this.config.inputValue || '';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  handleConfirm(): void {
    if (this.config.type === 'input') {
      if (this.inputValue.trim()) {
        this.onConfirm.emit(this.inputValue.trim());
        this.inputValue = '';
      }
    } else {
      this.onConfirm.emit(true);
    }
  }

  handleCancel(): void {
    this.inputValue = '';
    this.onCancel.emit();
  }

  handleOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.handleCancel();
    }
  }
}

