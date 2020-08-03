window.onload=function(){
var fullList = document.getElementById("shuffleNSort");

function shuffledList(items)
{
    var card = items.slice(0), temp, i = card.length, randVal;
    while(--i)
    {
        randVal = Math.floor(i * Math.random());
        temp = card[randVal];
        card[randVal] = card[i];
        card[i] = temp;
    }
    return card;
}
function shuffleCards()
{
    var cards = fullList.children, i = 0;
    cards = Array.prototype.slice.call(cards);
    cards = shuffledList(cards);
    while(i < cards.length)
    {
        fullList.appendChild(cards[i]);
        ++i;
    }   
} 
  
  function sortedList(items)
{
     var card = items.slice(0), swapped, temp;
 
    do {
        swapped = false;
        for (var i=0; i < card.length-1; i++) {
         
            if (card[i]["value"] > card[i+1]["value"]) {
                var temp = card[i];
                card[i] = card[i+1];
                card[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
 
  return card;
}
  
   function sortCards() {
     
    var cards = fullList.children, i = 0;
    cards = Array.prototype.slice.call(cards);
    cards = sortedList(cards);
    while(i < cards.length)
    {
        fullList.appendChild(cards[i]);
        ++i;
    }
		   
		 }
  
document.getElementById("shuffledList").onclick = shuffleCards; document.getElementById("sortedList").onclick = sortCards;

} 