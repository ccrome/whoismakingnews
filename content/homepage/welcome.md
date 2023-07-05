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
{{< welcome-chart id="welcome-chart" summary="true" height=300 >}}

**Broken out by Employment**
{{< welcome-chart id="welcome-chart2" summary="false" chart_type=bar height=300 >}}
