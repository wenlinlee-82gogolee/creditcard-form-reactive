import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardNumber: string | null | undefined;
  @Input() name?: string | null | undefined;
  @Input() expiration?: string | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}
