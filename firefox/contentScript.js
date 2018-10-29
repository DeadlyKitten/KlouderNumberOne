const table = document.getElementsByClassName("ranking")[1];

table.deleteRow(50);

const row = table.insertRow(1);

const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
const cell4 = row.insertCell(3);
const cell5 = row.insertCell(4);

const topPP = document.getElementsByClassName("scoreTop")[0].innerText;

cell1.innerHTML =
    `<td class="picture">
        <figure class="image is-24x24">
            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8e/8e204b4c802dc9fe09cb409afd9e38a692e5af22.jpg" style="border-radius: 50%">
        </figure>
    </td>`;

cell2.innerHTML =
    `<td class="rank">#1</td>`;

cell3.innerHTML =
    `<td class="player">
    <a href="/u/76561198121090494">
    <img src="/imports/flags/us.png">
    <span class="songTop pp" style="font-weight:700">Klouder</span>
    </a>
    </td>`;

cell4.innerHTML =
    `<td class="pp">
        <span class="scoreTop ppValue">${parseFloat (topPP.replace (/,/g,'')) + .01}</span><span class="scoreTop ppLabel">pp</span>
    </td>`;

cell5.innerHTML =
    `<td class="diff">
        <span style="color:#363636;">0</span>
    </td>`;

for (var i = 2; i < 51; i++)
{
    table.rows[i].cells[1].innerText = `#${i}`;
}