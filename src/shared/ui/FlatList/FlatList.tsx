import { FlatList as FlatListNB } from "native-base";
import { IFlatListProps } from "native-base/lib/typescript/components/basic/FlatList";
import { ListRenderItem } from "react-native";
import { VoidFunction } from "../../../shared/types";

type Props<DataType> = {
  data: Array<DataType>;
  onRefresh?: VoidFunction;
  refreshing?: boolean;
  renderItem: ListRenderItem<DataType>;
} & IFlatListProps<DataType>;

export const FlatList = <DataType,>(props: Props<DataType>) => {
  const {
    data,
    onRefresh,
    refreshing = false,
    renderItem,
    ...restProps
  } = props;

  return (
    <FlatListNB
      data={data}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={renderItem}
      {...restProps}
    />
  );
};
