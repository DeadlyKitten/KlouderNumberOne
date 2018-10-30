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
const cell5 = row.insertCell(4);

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

// this last cell was a bit tricky. I'm taking the PP of the previous top player, that I grabbed earlier, and add .01 to it
// I use the ${} inside of the string in order to allow me to do the addition without having to do it beforehand    
cell4.innerHTML =
    `<td class="pp">
        <span class="scoreTop ppValue">${parseFloat (topPP.replace (/,/g,'')) + .01}</span><span class="scoreTop ppLabel">pp</span>
    </td>`;

cell5.innerHTML =
    `<td class="diff">
        <span style="color:#363636;">0</span>
    </td>`;

// finally, I loop through all the rows below your's and change their rank to be 1 more than it was
// I start at 2 because row 0 is the header, and row 1 is you
for (var i = 2; i < 51; i++)
{
    table.rows[i].cells[1].innerText = `#${i}`;
}