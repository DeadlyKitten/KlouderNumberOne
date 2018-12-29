const lis = document.getElementsByTagName("ul")[0].getElementsByTagName("li");

const realGlobalRank = lis[0].getElementsByTagName("a")[0].innerText;
const realNationRank = lis[0].getElementsByTagName("a")[1].innerText;

console.log(realGlobalRank);
console.log(realNationRank);

lis[0].innerHTML = 
    `<strong>Player Ranking:</strong><a href="/global" title="${realGlobalRank}"> #1</a> - ( <a href="/global?country=us" title="${realNationRank.trim()}"><img src="/imports/flags/us.png"> #1</a> )`

chrome.storage.local.get("klouderScore", function (result) {
    if (typeof result.klouderScore === 'undefined')
    {
        console.log ("No PP set in local storage");
    }
    else
    {
        const realPP = lis[1].innerText.replace(/[^0-9, .]/g,'').toLocaleString('en', {minimumFractionDigits: 2});
        console.log (realPP);
        lis[1].innerHTML =
            `<strong>Performance Points:</strong> <span title="${realPP}pp">${result.klouderScore}pp</span>`;
    }
});