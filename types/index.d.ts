// Type definitions for UI SELECT BOX v0.0.1
// TypeScript Version: 3.9.5

declare namespace ui {
  export class Select {
    constructor(option: any);

    public open(): void;

    public close(): void;

    public setValue(value: string): void;

    public getValue(): string;
  }
}

export default ui.Select;
