import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from "@angular/fire/app";
import { getAnalytics } from "@angular/fire/analytics";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calliweb';

// Initialize Firebase
  const app = initializeApp(environment.firebaseConfig);
  // const analytics = getAnalytics(app);
}
