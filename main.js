import './src/components/styles/settings/colors.css';
import './src/components/styles/generic/reset.css';
import './src/components/styles/elements/base.css';
import BoardGame from './objects/BoardGame';
import PlayerName from './src/components/PlayerName';
import ScoreBoard from './src/components/ScoreBoard';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend",
    `
  ${ScoreBoard()}
  ${BoardGame(6)}
`);