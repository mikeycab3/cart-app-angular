import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-landing-pages',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './landing-pages.component.html',
  styleUrl: './landing-pages.component.scss'
})
export class LandingPagesComponent {
}
