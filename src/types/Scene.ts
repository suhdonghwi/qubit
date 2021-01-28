export interface GraphicContentProps {
  paragraphIndex: number;
}

export type GraphicContent = React.FunctionComponent<GraphicContentProps>;

export default interface Scene {
  textContent: React.ReactElement[];
  graphicContent: GraphicContent;
}
