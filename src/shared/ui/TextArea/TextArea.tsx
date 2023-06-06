import { ITextAreaProps, TextArea as TextAreaNB } from "native-base";

export const TextArea = (props: ITextAreaProps) => {
  return (
    <TextAreaNB
      h={20}
      w="100%"
      //Bug
      autoCompleteType={undefined}
      {...props}
    />
  );
};
