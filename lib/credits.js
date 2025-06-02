import { fromHtml } from "./helpers/fromHtml.js";
import { waitForLoad, localize } from "./helpers/localization.js";
import "./helpers/settings.js";

const template = () => `
  <div id="wrap">
    <main>
      <div class="container" id="pageContent">
        <div id="bingoPage">
          <h1>${localize("Minecraft Bingo")}${localize(" - ")}${localize(
  "Credits"
)}</h1>

          <h2>${localize("Generator")}</h2>
          <p>
            ${localize(
              "Originally written and designed by Narcissa. Improved by Giuocob."
            )}
          </p>
          <p>Code forked from <a href="https://github.com/ootbingo/bingo">ootbingo on GitHub</a>, many thanks to all the contributors to OoT Bingo!</p>

          <h2>${localize("Minecraft goals")}</h2>
          <p>BlueCrystal</p>
        </div>
      </div>
    </main>
  </div>
`;

waitForLoad().then(() => {
  document.title = `${localize("Minecraft Bingo")}${localize(
    " - "
  )}${localize("Credits")}`;
  document.body.append(fromHtml(template()));
});
