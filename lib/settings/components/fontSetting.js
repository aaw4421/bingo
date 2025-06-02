import { settings, getSettingField } from "../../helpers/settings.js";
import { renderSelect } from "./select.js";
import { handleSettingChange } from "../helpers/handleSettingChange.js";
import { localize } from "../../helpers/localization.js";

const fonts = [
  "Roboto",
  "Monocraft"
];

export const renderFontSetting = (setting) =>
  renderSelect({
    value: settings[getSettingField(setting)],
    label: localize(setting.label),
    options: fonts.map((font) => ({
      label: font,
      value: `"${font}"`,
      font: `"${font}"`,
    })),
    onChange: (value) => {
      handleSettingChange(setting, value);
    },
  });
