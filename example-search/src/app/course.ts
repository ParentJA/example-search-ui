export class Course {
  constructor(
    public id?: number,
    public course_code?: string,
    public title?: string,
    public description?: string,
    public exact_rank?: number,
    public full_text_rank?: number,
    public fuzzy_rank?: number
  ) {}
}
