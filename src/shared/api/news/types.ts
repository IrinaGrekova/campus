export type NewsDto = {
  id: number;
  creationDate: string;
  title: string;
  text: string;
  imageData?: string;
  tags?: string[];
  activeTag?: string;
};

export type NewsListRequestParams = {};
