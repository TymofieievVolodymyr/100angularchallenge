
# 100angularchallenge
100 angular challenge

- Challenge 1
  - ``` <ng-content></ng-content> ``` => In toolbar component
  - ``` <app-toolbar [title]="Challenge1">
       <ul>
         <li>Data</li>
          <li>Data</li>
        </ul>
      </app-toolbar>
    ```
  - CSS:
    ```
    display: grid;
    grid-gap: 10px;
    grid-tenplate-columns: 1fr auto;
    
    :host ::ng-deep ul{
       display: grid;
       grid-gap: 10px;
       grid-auto-flow: column;
    }
    
    :host ::ng-deep li {
      display: inline;
    }
 - Challenge 2
  - ```
     <app-card [iconclass]="'iconclass'">
     <p body>Body Content</p>
     <p footer>Footer</p>
     </app-card>
    ```
  - ```
    <ng-content select="[body]"></ng-content>
    <ng-content select="[footer]"></ng-content>
    ```
    
 - Challenge 3 => Accordion
   - ```
     <div class="head">
      <div class="title">
        <h3>{{item.title}}</h3>
        <i class="fa fa-chevron-down" [class.is-expanded]="item.isExpanded" (click)="toggle(item)"></i>
      </div>
      <div class="content" *ngIf="item.isExpanded">
        <p>{{item.content}}</p>
      </div>
     </div>
     ```
   - ```
     toggle(item: Accordion): void {
       item.isExpanded = !item.isExpanded;
     }
     ```
   - ```
     .head {
       display: grid;
       grid-gap: 10px;
       grid-template-columns: 1fr auto;
     }
     i {
       transition: all 0.3s;
     }
     i.is-expanded {
      transform: rotate(-180deg);
     }
     ```
- Challenge 4 => ProgressBar 
  - ```
    @Input() value = 0;
    maxvalue =100;
    <app-progressbar [value]="progressValue"></app-progressbar>
    <button (click)="progressValue=progressValue+10">Update</button>
    ```
  - ```
    <progress [value]="value" [max]="maxvalue"></progress>
    ```
  - ```
    progress {
      width: 100%;
      height: 15px;
      background-color: #eee;
      transition: all 1s;
    }
    
    progress[value]::-webkit-progress-value {
      background-color: #blue;
      transition: all 3s;
    }
    progress[value]::-webkit-progress-bar,
    progress[value]::-webkit-progress-value {
      border-radius: 20px;
    }
    ```
- Challenge 5 => Star ratings
  - ```
     @Input() rating = 0.0;
     maxRating = 5;
     public get fullStars(): number[] {
       const full = Math.floor(this.rating);
       const fullStars = Array(full).fill(0);
       return fullStars;
     }
     public get emptyStars(): number[] {
       const full = Math.floor(this.maxRating - this.rating);
       const fullStars = Array(full).fill(0);
       return fullStars;
     }
     public get halfStars(): number[] {
       const full = Math.floor(this.rating);
       const empty = Math.floor(this.maxRating - this.rating);
       const half = Math.floor(this.maxRating - full - empty);
       const fullStars = Array(half).fill(0);
       return fullStars;
     }
     ```
   - ```
      <i class="fa fa-star" *ngFor="let i of fullStars"></i>
      <i class="fa fa-star-half-o" *ngFor="let i of halfStars"></i>
      <i class="fa fa-star-o" *ngFor="let i of emptyStars"></i>
     ```


