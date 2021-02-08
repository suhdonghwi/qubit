export type Myth = {
  title: string;
  content: JSX.Element[];
};

export default class MythBuilder {
  private result: Myth[];
  private counter: number;

  constructor() {
    this.result = [];
    this.counter = 1;
  }

  public myth(title: string) {
    return (textContent: TemplateStringsArray) => {
      const paragraphs = textContent[0].split("\n\n").map((t) => t.trim());

      this.result.push({
        title: `${this.counter}. ${title}`,
        content: paragraphs.map((p) => <p>{p}</p>),
      });
      this.counter++;
      return this;
    };
  }

  public build() {
    return this.result;
  }
}
