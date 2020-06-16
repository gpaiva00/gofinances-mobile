interface TransactionDTO {
  title: string;
  type: string;
  value: number;
  category_id: number;
}

export class Transaction {
  
  constructor(params: TransactionDTO) {
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