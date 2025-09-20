import { fromHtml } from "../helpers/fromHtml.js";
import { localize } from "../helpers/localization.js";

/**
 *
 * @param {object} props
 * @param {number} props.newSeed
 * @param {string} [props.version]
 * @param {string} [props.lang]
 * @returns
 */
const template = ({ newSeed, version, lang }) => `
  <div class="info">
    <h1>${localize("Minecraft Bingo")}</h1>
    <div class="links">
    <a class="link-button" href="/bingo/bingo.html?mode=normal&seed=${newSeed}${
  version ? `&version=${version}` : ""
}${lang ? `&lang=${lang}` : ""}">${localize("Normal card")}</a>
    <a class="link-button" href="/bingo/bingo.html?mode=short&seed=${newSeed}${
  version ? `&version=${version}` : ""
}${lang ? `&lang=${lang}` : ""}">${localize("Short card")}</a>
    <a class="link-button" href="/bingo/bingo.html?mode=blackout&seed=${newSeed}${
  version ? `&version=${version}` : ""
}${lang ? `&lang=${lang}` : ""}">${localize("Blackout card")}</a>
    <a class="link-button" href="/bingo/settings.html">${localize(
      "Settings"
    )}</a>
    <a class="link-button" href="/bingo/">${localize("Other versions")}</a>
    </div>
    <h2>${localize("About")}</h2>

    <p>${localize("This is a <i>Bingo</i> board for Minecraft races")}</p>
    <p>
    ${localize(
      "To win, you must complete 5 of the tasks in a row horizontally, vertically, or diagonally"
    )}
    </p>
    <p>
    ${localize(
      "The goals are balanced around playing on Minecraft version 1.16.1"
    )}
    </p>
    <p>
    ${localize(
      "Using <a href=\"https://github.com/DarwinBaker/AATool\">AATool (click to download)</a> is allowed and recommended for automatic progression tracking on various goals"
    )}
    </p>
    <p>
    ${localize(
      "You can click on the squares to turn them green and red. This may help you organize your route planning"
    )}
    </p>
    <h2>${localize("Rules")}</h2>

    <h3>${localize("Glitch Rules")}</h3>
    <p>The bingo boards are balanced around the following rules:</p>
    <ul>
      <li>${localize("Glitches that duplicate items are <b>banned</b>")}</li>
      <li>${localize("X-ray glitches are allowed")}</li>
      <li>${localize("Wrong warping using Nether/End portals is allowed (\"portal bonking\")")}</li>
      <li>${localize("Dragon Skip (and one-shot) is allowed")}</li>
      <li>${localize("All other glitches tentatively allowed")}</li>
    </ul>

    <h3>${localize("Goal Clarifications")}</h3>
    <ul>
      <li>
        <i>${localize(
          "Items"
        )}</i>${localize(": item must be present in the inventory (armor slots also count) in order to finish. For example, for the goal <i>Totem of Undying</i>, it must not be consumed")}
      </li>
      <li>
        <i>${localize(
          "Kill a(n) X"
        )}</i>${localize(": you must deal the final hit and the game must credit you with the kill; for <i>Defeat the Ender Dragon</i> this requirement does not apply")}
      </li>
      <li>
        <i>${localize(
          "X Different Bucket Contents"
        )}</i>${localize(": empty bucket does NOT count")}
      </li>
      <li>
        <i>${localize(
          "Defeat the Ender Dragon"
        )}</i>${localize(": the Ender Dragon must be killed, Dragon Skip does not count")}
      </li>
      <li>
        <i>${localize(
          "Advancement progression goals"
        )}</i>${localize(": goals with an associated advancement are counted as tracked by the advancement, so e.g. for <i>Breed X Different Animal Species</i> trader llamas do not count. AATool is recommended")}
      </li>
    </ul>
    
    <h3>${localize("Other Rules")}</h3>
    <ul>
    <li>
      ${localize(
        "AATool is allowed."
      )}
      </li>
      <li>
      ${localize(
        "Numbers are minimums. Collecting more than enough is allowed unless otherwise stated"
      )}
      </li>
    </ul>

    <h3>${localize("When goals are completed")}</h3>
    <ul>
      <li>${localize(
        '<i>Kill/Defeat X</i>: When the final hit is dealt to the mob'
      )}</li>
      <li>${localize("<i>Item</i>: When the item enters your inventory")}</li>
      <li>${localize(
        "<i>Craft</i>: When you move the item from the crafting GUI into your inventory"
      )}</li>
      <li>${localize("<i>Drink/Eat</i>: When you finish drinking/eating the item")}</li>
    </ul>
    </ul>
    <a href="credits.html">${localize("Credits")}</a>
  </div>
`;

/**
 * @param {object} props
 * @param {string} [props.version]
 * @returns
 */
export const renderInfo = ({ version }) => {
  const search = new URLSearchParams(location.search);
  const newSeed = Math.ceil(999999 * Math.random());
  return fromHtml(template({ newSeed, lang: search.get("lang"), version }));
};
