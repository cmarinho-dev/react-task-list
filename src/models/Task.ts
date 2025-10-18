export class Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;

  constructor(
    id: string,
    title: string,
    description: string,
    isCompleted: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
  }
}
