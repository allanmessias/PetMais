import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Icon from "./Icon";

export default function SwitchTheme() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      size="lg"
      color="primary"
      bordered
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      iconOn={<Icon name="dark_mode" />}
      iconOff={<Icon name="light_mode" />}
    />
  );
}
