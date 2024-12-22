export interface Event {
    year: number;
    description: string;
  }
  
  export interface Category {
    category: string;
    events: Event[];
  }
  
  export type MockData = Category[];