import { Component, Input }  from '@angular/core';
import { UserModel } from "../models/user.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() user: UserModel | undefined;
}
