---
title: "Welcome"
weight: 10
header_menu: true
---
Hi, I'm Kristen Browde, and this is a site that was set up because
people wanted to see the data that goes into my TikTok series,
[Who's Making News for Sex Crimes involving Children.](#tiktok)

#### Who is really committing crimes against children?

Here is the latest data from {{< db_case_count id="case-count" >}} cases, as of {{< db_latest_date id="latest-date" >}}.

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
sampling errors.

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
