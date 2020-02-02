export class CreateItemDto {
  readonly name: string;
  readonly description: string;
  readonly qty: number;
  constructor(
    private newName: string,
    private newDescription: string,
    private newQty,
  ) {}
}
