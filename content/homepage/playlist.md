---
title: "TikTok Playlist"
weight: 35
header_menu: true
---
**TikTok "Who's Making News" Playlist**

<span id="tiktok-id"></span>
<script>
    crime_db.then((data) => {
      let df = data.tiktok;
      // reverse all the rows
      df = df.reverse();
      // loop through each row
      let html = "";
      html += '<ul class="grid-list">';
      df.forEach((row) => {
        html += `<li><a href=${row.URL} target="_blank">${row.Title}</a></li>`;
      });
      html += "</ul>";
      document.getElementById("tiktok-id").innerHTML = html;
    });
</script>
