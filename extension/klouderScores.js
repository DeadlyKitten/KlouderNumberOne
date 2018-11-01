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
        lis[1].innerHTML =
            `<strong>Performance Points:</strong> ${result.klouderScore}pp`;
    }
});