export default class Port {
  private _value: number;

  constructor(value: number) {
    if (value < 1 || value > 65535) {
      throw new Error("Invalid port supplied");
    }
    this._value = value;
  }

  public get value(): number {
    return this._value;
  }
}
