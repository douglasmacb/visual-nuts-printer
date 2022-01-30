
export class Messages {
  private readonly list: Object[] = []

  toConsole (): void {
    this.list.forEach(item => console.log(item))
  }

  get (): Object[] {
    return this.list
  }

  add (item: Object): void {
    this.list.push(item)
  }
}
