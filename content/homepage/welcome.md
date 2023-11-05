---
title: "Welcome"
weight: 10
header_menu: true
---
Hi, I'm Kristen Browde, and this is a site that was set up because
people wanted to see the data that goes into my TikTok series,
[Who's Making News for Sex Crimes involving Children.](#tiktok)

####  As of 10 AM 11/4/23 We LOST FUNCTIONALITY IN THE TOP OF THE SITE - But the data calculations and visualizations lower on the page are still working. This happened when Google declared that our main data sheet was in violation of its terms of service. We're working to restore full functionality and, in the meantime appealing Google's bizarre decision. And our TikTok reports will continue.
h
Who is actually committing crimes against children?

Here is the data from the latest {{< db_case_count id="case-count" >}} cases, as of {{< db_latest_date id="latest-date" >}}.

<div class="horizontal">
{{< db_button id="relig-id" category="Religious Employment" >}}
{{< db_button id="trans-id" category="Trans" label="Transgender" >}}
{{< db_button id="drag-id" category="Drag Queen" >}}
</div>

**Summarized data**

**Note:** Unless you check the `Include Not Listed` checkbox below, 
the charts will exclude
{{< db_case_count id="not-included" category="Not Listed" >}} cases
that do not have any employment or relationship included in the news reports.  
You can help make the data more complete by looking in our
[Data Section](#data) and submitting any changes or corrections you find.

<!-- add a checkbox to show the per-capita chart -->
<div class="horizontal">
    <input type="checkbox" id="show-not-listed" 
    name="show-not-listed" value="show-not-listed" 
    onclick="toggleNotListed()">
    <label for="show-not-listed">Include Not Listed</label>
</div>

{{< welcome-chart id="welcome-chart" summary="true" height=300 exclude="Not Listed" title="Crimes Against Children" >}}
{{< welcome-chart id="welcome-charta" summary="true" height=300 title="Crimes Against Children" >}}

**More Detailed Breakdown**
{{< welcome-chart id="welcome-chart2" summary="false" exclude="Not Listed" height=300 title="Crimes Against Children Detailed" >}}
{{< welcome-chart id="welcome-chart2a" summary="false" height=300 title="Crimes Against Children Detailed" >}}




**Per-Capita Crime Heatmap**

This map shows the crimes involving children per state, per million population.
The darker the color, the higher the per-capita crime rate.
Some states with very low populations may have an abnormally high or low crime rate due to 
quirks in the way statistics work with small sample sizes.

{{< heatmap >}}


<script>
    function toggleNotListed() {
        var x = document.getElementById("welcome-chart");
        var y = document.getElementById("welcome-charta");
        var z = document.getElementById("welcome-chart2");
        var a = document.getElementById("welcome-chart2a");
        if (document.getElementById("show-not-listed").checked) {
            y.style.display = "block";
            a.style.display = "block";
            x.style.display = "none";
            z.style.display = "none";
        } else {
            x.style.display = "block";
            z.style.display = "block";
            y.style.display = "none";
            a.style.display = "none";
        }
    }
    document.getElementById("welcome-charta").style.display = "none";
    document.getElementById("welcome-chart2a").style.display = "none";
</script>
<br>

Data footnote: with the assistance of other TikTok members, one, in particular, Celiene O'Hara, who has been super helpful, we're engaged in data cleanup on a daily basis. That means you should consider all the data a work in progress, and you may see numbers go down from time to time, as we find duplicate entries, typically caused when there's either a minor spelling issue in reports or when there's an update in a case and we miss the earlier entry. When we find those updated or duplicate entries they're checked as "deleted" in the database, but you can still see the original data, with the deleted notation, if you download the full data file - which you can do by clicking on the "Data" tab on the left. <BR>

##### What conclusions can you draw from the numbers to date?

A terrific data analyst, Emily Parker, who runs DataViz.fyi, has created a graphical analysis breaking down the data and drawing some vital comparisons. Note: There is a short lag between the time we enter data and the time it filters through to Emily's analysis page - which only matters right after I finish adding to the database. 

<div id="minicontent" style="text-align:left; min-width:1280px; min-height:2560px;"><iframe width="850" height="2540" src="https://lookerstudio.google.com/embed/reporting/74af7476-c667-4a7c-8b89-1e5394e6c689/page/6KJYD" frameborder="0" style="border:0" allowfullscreen="" style="display:block;"></iframe></div>\
