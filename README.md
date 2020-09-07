
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
