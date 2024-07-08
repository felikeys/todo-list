import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
router = inject(Router);

// onNavigateToNewEvent() {
//   this.router.navigate(['new-event']);
// }
}
