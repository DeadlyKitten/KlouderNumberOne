// grab the table so I can edit it to my heart's desire
const table = document.getElementsByClassName("ranking")[1];

// delete the 50th person, for consistency
table.deleteRow(50);

// create a new row at the top, just under the headers
const row = table.insertRow(1);

// create the 4 cells in the row I just created
const cell1 = row.insertCell(0);

const cell2 = row.insertCell(1);

const cell3 = row.insertCell(2);

const cell4 = row.insertCell(3);
cell4.classList.add("pp");

const cell5 = row.insertCell(4);
cell5.classList.add("diff");

// before I fill in your info, I want to grab the PP of the "top" player
const topPP = document.getElementsByClassName("scoreTop")[0].innerText;

// this is where I start adding in the HTML for the different cells
// this cell contains your profile picture
cell1.innerHTML =
    `<td class="picture">
        <figure class="image is-24x24">
            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8e/8e204b4c802dc9fe09cb409afd9e38a692e5af22.jpg" style="border-radius: 50%">
        </figure>
    </td>`;

// this cell contains your rank (#1 of course)
cell2.innerHTML =
    `<td class="rank">#1</td>`;

// this cell contains your name, as well as the US flag. It also links directly to your Scoresaber profile
cell3.innerHTML =
    `<td class="player">
    <a href="/u/76561198121090494">
    <img src="/imports/flags/us.png">
    <span class="songTop pp" style="font-weight:700">Klouder</span>
    </a>
    </td>`;

// here I calculate your pp and save it locally so I can use it on your profile page as well
const klouderScore = Number ((parseFloat (topPP.replace (/,/g,'')) + .01)).toLocaleString('en', {minimumFractionDigits: 2});
chrome.storage.local.set({ "klouderScore": klouderScore });
console.log (klouderScore);

// here I set your pp
cell4.innerHTML =
    `<span class="scoreTop ppValue">${klouderScore}</span><span class="scoreTop ppLabel">pp</span>`;

// here I set your change in rank, which is always 0
cell5.innerHTML =
    `<span>0</span>`;

// finally, I loop through all the rows below your's and change their rank to be 1 more than it was
// I start at 2 because row 0 is the header, and row 1 is you
for (var i = 2; i < 51; i++)
{
    table.rows[i].cells[1].innerText = `#${i}`;
}