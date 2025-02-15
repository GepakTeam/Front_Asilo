import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';


@Component({
  selector: 'app-psicologa',
  standalone: true,
  imports: [RouterLink,
    NavbarComponent,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule],
  templateUrl: './psicologa.component.html',
  styleUrl: './psicologa.component.css'
})
export class PsicologaComponent {

}
