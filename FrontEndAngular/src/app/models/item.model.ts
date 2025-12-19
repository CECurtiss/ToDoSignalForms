export class Item {
  constructor(
    public id: number,
    public priority: string,
    public task: string = '',
    public dueDate: Date | null = null,
    public completed: boolean = false,
    public dateCompleted?: Date
  ) {}

  toggleCompletion(): Item {
    return new Item(this.id, this.priority, this.task, this.dueDate, !this.completed, this.dateCompleted);
  }
}