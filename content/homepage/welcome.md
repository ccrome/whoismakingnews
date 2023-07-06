---
title: "Welcome"
weight: 10
---
Hi, I'm Kristen Browde, and this is a site that was set up because
people wanted to see the data that goes into my TikTok series,
[Who's Making News for Sex Crimes involving Children.](#tiktok)

#### Who is really committing crimes against children?

Here is the latest data from {{< db_case_count id="case-count" >}} cases, as of {{< db_latest_date id="latest-date" >}}.

<div class="horizontal">
{{< db_button id="relig-id" category="Religious Employment" >}}
{{< db_button id="trans-id" category="Trans" >}}
{{< db_button id="drag-id" category="Drag Queen" >}}
</div>

**Summarized data**

**Note:** This data excludes
{{< db_case_count id="not-included" category="Not Listed" >}} cases
that do not have any employment or relationship included.  You can
help make the data more complete by looking in our
[Data Section](#data) and submit any changes.


{{< welcome-chart id="welcome-chart" summary="true" height=300 exclude="Not Listed" >}}

**Broken out by Employment**
{{< welcome-chart id="welcome-chart2" summary="false" exclude="Not Listed" height=300 >}}

**Per-Capita Crime Heatmap**

This map shows the crimes involving children per state, normalized to 
the population of the state.  The darker the color, the higher the
per-capita crime rate.  The data is normalized to between 0 and 1, with
no crimes reported in some states.  For obvious resons, some states with
very low populations may have an abnormally high or low crime rate due to 
sampling errors.

{{< heatmap >}}
