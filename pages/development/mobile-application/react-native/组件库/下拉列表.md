# react-native-picker-select

## install

```shell
npm install react-native-picker-select

# React Native users
npm install @react-native-picker/picker

```

```ts
import RNPickerSelect from "react-native-picker-select";

export const Dropdown = () => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        { label: "Football", value: "football" },
        { label: "Baseball", value: "baseball" },
        { label: "Hockey", value: "hockey" },
      ]}
    />
  );
};
```
