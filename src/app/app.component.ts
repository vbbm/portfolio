import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  tickets(bills: Array<25 | 50 | 100>): 'Yes' | 'No' {
    let bill25 = 0;
    let bill50 = 0;

    bills.forEach((bill) => {
      switch (bill) {
        case 25:
          bill25++;
          break;
        case 50:
          bill50++;
          bill25--;
          break;
        case 100:
          if (bill50 > 0) {
            bill50--;
            bill25--;
          } else {
            bill25 -= 3;
          }
          break;

        default:
          break;
      }
    });
    return bill25 < 0 ? 'No' : 'Yes';
  }
}
