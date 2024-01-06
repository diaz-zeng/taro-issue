/*
 * @Author: 曾令宇
 * @Date: 2022-10-26 21:34:28
 * @FilePath: /credit-miniprogram/src/packageFinanceAffairs/pages/finance-affairs/components/empty.tsx
 */
import { css } from "@linaria/core";
import { Text, View } from "@tarojs/components";
import { FC } from "react";

const style = css`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img {
    width: 488px;
    height: 488px;
  }
  > Text {
    &:last-child {
      margin-bottom: 500px;
    }
  }
`;
export const Empty: FC = () => {
  return <View className={style}>12345</View>;
};
