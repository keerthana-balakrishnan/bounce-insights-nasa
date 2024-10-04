import { IStyle } from "@fluentui/react";

type SplitViewStyles = {
  item: IStyle;
  card: IStyle;
  cardOrder: IStyle;
  title: IStyle;
  description: IStyle;
  additionalInfo: IStyle;
};

type RoverDetails = {
  id: number;
  name: string;
  date: string;
  status: string;
  launchDate: string;
  landingDate: string;
  imageMaxDate: string;
  description: string;
  referance: string;
};

export type { SplitViewStyles, RoverDetails };
