import { Image as ImageNB, IImageProps } from "native-base";
import { FC } from "react";

const imagePlaceholder = require("../Image/ImagePlaceholder.png");

export const Image: FC<IImageProps> = ({ defaultSource, ...restProps }) => (
  <ImageNB defaultSource={defaultSource || imagePlaceholder} {...restProps} />
);
