import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;
  
  protected readonly title = signal('Task Management Dashboard');
  
  // Task data
  protected readonly tasks = signal([
    {
      id: 1,
      title: 'Imp',
      description: 'I have',
      icon: 'article',
      completed: false
    }
  ]);
  
  // Progress data
  protected readonly progressItems = signal([
    {
      id: 1,
      text: 'Fix animation position to appear above the button instead of top on it',
      status: 'completed'
    },
    {
      id: 2,
      text: 'Fix animation position to appear above the button instead of top on it',
      status: 'in-progress'
    },
    {
      id: 3,
      text: 'Double the animation size from 100x100 to 200x200',
      status: 'pending'
    }
  ]);
  
  // Message data
  protected readonly message = signal({
    subject: 'Subject: Update on Payment Status for Reference dc80719f-3161-4204-a14b-8a733420bf5f',
    content: `Dear Sushil,

Thank you for reaching out regarding the status of your payment with reference dc80719f-3161-4204-a14b-8a733420bf5f.

We have reviewed the transaction and found that the payment is currently pending due to an issue encountered during the funds control process. Although the payment was successfully initiated and cleared all compliance checks, it did not pass the internal funds control phase. As a result, the payment has not yet been completed and is under technical review by our team.

Please be assured that we are actively investigating the matter to resolve the issue as quickly as possible. We will keep you updated on any progress or if further information is required.

Thank you for your patience and understanding. If you have any further questions or need additional assistance, please let us know.

Best regards, Client Servicing Team`
  });
  
  // Sentiment data
  protected readonly sentiment = signal({
    text: 'The email tone is polite but you can sense the frustration behind the multiple follow-ups!',
    emoji: 'smile'
  });
  
  // Method to handle new task creation
  protected createNewTask(): void {
    console.log('Creating new task...');
    // Implementation for creating new tasks
  }
  
  // Message input
  protected newMessage: string = '';

  // Method to handle message sending
  protected sendMessage(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.newMessage.trim()) {
      console.log('Sending message:', this.newMessage);
      // Add the message to the conversation or handle it as needed
      this.newMessage = ''; // Clear the input after sending
    }
  }

  // Method to handle key press events
  protected onMessageKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  // Method to handle attachment
  protected addAttachment(event: Event): void {
    event.stopPropagation();
    console.log('Adding attachment...');
    // Implementation for adding attachments
  }

  // Method to focus the input when clicking the container
  protected focusInput(): void {
    if (this.messageInput) {
      this.messageInput.nativeElement.focus();
    }
  }
  
  // Method to toggle task completion
  protected toggleTaskCompletion(taskId: number): void {
    console.log('Toggling task completion:', taskId);
    // Implementation for toggling task completion
  }

  // Task progress section toggle
  protected isTaskProgressExpanded = signal(true);

  // Method to toggle task progress section
  protected toggleTaskProgress(): void {
    this.isTaskProgressExpanded.set(!this.isTaskProgressExpanded());
  }
}
