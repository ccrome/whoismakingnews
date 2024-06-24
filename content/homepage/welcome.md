---
title: "Ten Thousand Predators"
weight: 10
header_menu: true
---
This site was set up to allow public access and verification of the data that goes into my TikTok series,
   {{% extlink text="Who's Making News for Sex Crimes Involving Children." href="https://www.tiktok.com/@newgirlny_fl" %}} This research project aggregates and analyzes news reports published about sexual assaults on children in the United States, and is designed to be fully verifiable. You can check the data by downloading the full database - just click the "Source Data" tab.   
#### 

**Here is the data summary from the {{< db_case_count id="case-count" >}} cases in the database. The cases in the database run from February 10, 2023 through {{< db_latest_date id="latest-date" >}}.** 

<div class="horizontal">
{{< db_button id="relig-id" category="Religious Employment" >}}
{{< db_button id="trans-id" category="Trans" label="Transgender" >}}
{{< db_button id="drag-id" category="Drag Queen" >}}
</div>

Scroll down for the current visualizations and analysis. 

What's in the Database: I collected and aggregated data, starting on a somewhat random date, February 10, 2023, and running through one week after May 16, 2024, the date on which the number of individuals in the database exceeded 10,000 cases. I'm now working primarily on data cleanup review, after which I'll work on detailed analysis leading to a report. Important note for those looking at the current database: not all cases prior to the official closing date, May 23, 2024, have been processed; the reports don't arrive in chronological order. I'm currently going back and filling in cases that were not picked up in earlier searches, something that has already added hundreds of additional entries. Many more are expected as we also add new data sources to the aggregation.<BR>

The Series Goal: fact checking narratives about sex crimes against children." The site contains a set of data and statistical analysis of that data, nothing more. The data, like the facts, don't care about anyone's feelings, or politics.  <BR> 

I encourage you to fact check the data. Use the "Data" tab on the left to download the full database. The data collection started in mid-February 2023 and is limited to the United States only. The rules for inclusion in the database are simple: the cases we're examining are limited to crimes involving actual sexual assaults on children. Therefore the data excludes arrests in "sting" or CSAM possession cases, except where the perpetrator is charged with creating the CSAM, and thus has had direct contact with a victim.<BR>

You can help make the data more complete by downloading the Source Data (tab on the upper left) and by submitting any additions, changes or corrections you find. The e-mail dedicated to this project is whoismakingnews@browdelaw.com.<BR> <BR>

**Note:** Unless you check the `Include Not Listed` checkbox below, 
the charts will exclude
{{< db_case_count id="not-included" category="Not Listed" >}} cases
that do not have any employment or relationship included in the news reports.  

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

##### What conclusions can you draw from the numbers to date?

A terrific data analyst, Emily Parker, who runs DataViz.fyi, has created a rich graphical analysis breaking down the data and drawing some vital comparisons. Click inside the analysis for more detailed explanations and per capita category comparisons that are eye opening to say the least. Note: There is a short lag between the time we enter data and the time it filters through to Emily's analysis page - the lag only shows up in the minutes right after I finish adding to the database, and explains any possible discrepancy between the summary number above and the numbers within the analysis page. 

<div id="minicontent" style="text-align:left; min-width:1280px; min-height:2560px;"><iframe width="850" height="2540" src="https://lookerstudio.google.com/embed/reporting/74af7476-c667-4a7c-8b89-1e5394e6c689/page/6KJYD" frameborder="0" style="border:0" allowfullscreen="" style="display:block;"></iframe></div>

Data footnote: with the assistance of other TikTok members, one, in particular, Celiene O'Hara, who has been super helpful, we're engaged in data cleanup as well as updating on a daily basis. That means you should consider all the data a work in progress, and you may see numbers go down from time to time, as we find duplicate entries, typically caused when there's either a minor spelling issue in reports or when there's an update in a case and we miss the earlier entry. When we find those updated or duplicate entries they're checked as "deleted" in the database, but you can still see the original data, with the deleted notation, if you download the full data file - which you can do by clicking on the "Data" tab on the left. <BR>

**And if you want to look just at current trends, here's a link to a visualization
developed by Eric Graham, which opens in a new window** https://erksome.shinyapps.io/WMN_Analysis/
 
