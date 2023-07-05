---
title: "Organizations"
weight: 30
header_menu: true
---

##### ORGANIZATIONS MAKING NEWS

Our [Data](#data) Page contains the reports of individuals who make
news. This page is for the organizations which make news because of
massive scandals, coverups or other actions that result in stories
involving abuse of children. Like our data page, we link to the source
data and leave no reports out. Because these reports typically involve
abuse over long periods of time, outside our study period, these
reports are not tabulated in our percentage or individual offender
data, including the central pie chart. 

<span id="organizations-id"></span>
<script>
    crime_db.then((data) => {
      let df = data.org;
      // group the df by Organization
      var orgs = d3.group(df, d => d.Organization);
      // loop over each Organization, and each of its rows
      let html = "";
      orgs.forEach((org, org_name) => {
        html += "<h6>" + org_name.toUpperCase() + "</h6>";
        // loop through each org's rows and print out the date
        html += "<ul>";
        org.forEach((row) => {
          // get the number of predators, converting from string to integer.  blank is 0
          let predators = parseInt(row.Predators);
          let victims = parseInt(row.Victims);
          predators = predators ? `${predators} predators` : "";
          victims = victims ? `${victims} victims` : "";          
          html += `<li> ${row.Date} <a href="${row.URL}" target="_blank" >${row.Summary}. ${predators} ${victims}</a></li>`;
        });
        html += "</ul>";
      });
      document.getElementById("organizations-id").innerHTML = html;
    });
</script>