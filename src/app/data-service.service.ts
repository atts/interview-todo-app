import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  category = ['groceries', 'tools', 'planned 4 today', 'misc'];
  data = {
    'groceries': [{ id: 1, value: 'fruit' },
    { id: 2, value: 'bread', striked: false }
    ],
    'tools': [{ id: 1, value: 'tool1' },
    { id: 2, value: 'tool2', striked: false }
    ],
    'misc': [{ id: 1, value: 'misc1' },
    { id: 2, value: 'misc2', striked: false }
    ],
    'planned 4 today': [{ id: 1, value: 'buy groceries' },
    { id: 2, value: 'wash dishes' , striked: false }
    ]
  }
    
  
  constructor() { }

  getCategories() {
    return of(this.category);
  }

  getData() {
    return of(this.data);
  }
}
