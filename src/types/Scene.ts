export type GraphicContent = React.FunctionComponent<{
  paragraphIndex: number;
}>;

export default interface Scene {
  textContent: React.ReactElement[];
  graphicContent: GraphicContent;
}
