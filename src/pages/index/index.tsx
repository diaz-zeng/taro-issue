import Store from "src/store";
import { funcA } from "src/utils";
import { css } from "@linaria/core";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { Observer, observer } from "mobx-react";
import {Empty} from "src/components/empty";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

const styles = css`
  background: red;
`;
export default () => {
  funcA();
  return (
    <Observer>
      {() => (
        <View className={styles}>
          <Empty></Empty>
          <Text>Hello world!</Text>
          <Text>{Store.count}</Text>
          <AtButton type='primary' onClick={Store.add} circle>
            ++
          </AtButton>
          <AtButton type='secondary' onClick={Store.minus} circle>
            --
          </AtButton>
        </View>
      )}
    </Observer>
  );
};
// export default observer(() => {
//   funcA();
//   return (
//     <View className={styles}>
//       <Empty></Empty>
//       <Text>Hello world!</Text>
//       <Text>{Store.count}</Text>
//       <AtButton type="primary" onClick={Store.add} circle>
//         ++
//       </AtButton>
//       <AtButton type="secondary" onClick={Store.minus} circle>
//         --
//       </AtButton>
//     </View>
//   );
// });
