interface Transaction {
  title: string;
  type: string;
  value: number;
  category_id: number;
}

export class Transactions {
  
  constructor(params: Transaction) {
    this.title = params.title;
    this.type = params.type;
    this.value = params.value;
    this.category_id = params.category_id;
  }

  public title: string;
  public type: string;
  public value: number;
  public category_id: number;
  
}