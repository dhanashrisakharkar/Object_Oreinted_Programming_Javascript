/*******************************************************************************************************
 * @problem : Deck of Cards by geeting cards shuffles it and distribute into four players. 
 * @fileName : DeckOfCardMain.js
 * @Auther  : Dhanashri Sakharkar.
 
 *******************************************************************************/

let Deck = require('./DeckOfCardsBussiness.Logic')
let result = Deck.getDeck();
Deck.shuffle(result);

