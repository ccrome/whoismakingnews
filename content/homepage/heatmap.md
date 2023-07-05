---
title: "Map"
weight: 25
header_menu: true
---
**Per-Capita Crime Heatmap**

This map shows the crimes involving children per state, normalized to 
the population of the state.  The darker the color, the higher the
per-capita crime rate.  The data is normalized to between 0 and 1, with
no crimes reported in some states.  For obvious resons, some states with
very low populations may have an abnormally high or low crime rate due to 
sampling errors.

<canvas id="heatmap-id"></canvas>
<script>
  async function get_state_data() {
    return crime_db.then((data) => {
        let df = data.df;
        let total = df.length;
        // use d3 to group by State
        let df_grouped = d3.group(df, d => d.State);
        // convert the grouped rows to a map of row counts
        df_grouped = new Map(Array.from(df_grouped, ([key, value]) => [key, value.length / total]));
        return df_grouped;
    });
  }
  fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) => r.json()).then((us) => {
    const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
    const states = ChartGeo.topojson.feature(us, us.objects.states).features;
    const labels = states.map((d) => d.properties.name);
    let max = 0;
    let min = 1e100;
    get_state_data().then((data) => {
      let values = states.map((d) => {
        let state = convertStateToAbbr(d.properties.name);
        let pop = populationOfState(state);
        if (data.has(state)) {
          let v = data.get(state)/pop;
          if (v > max) max = v;
          if (v < min) min = v;
          return ({feature: d, value: v});
        }
        else return ({feature: d, value: null});
      });
      // normalize the values to be between 0 and 1, using max and min
      values = values.map((row) => {
        if (row.value == null) return row;
        else {
          row.value = (row.value - min) / (max - min);
          return row;
        }
      });
      console.log(values);
      const chart = new Chart(document.getElementById("heatmap-id").getContext("2d"), {
        type: 'choropleth',
        data: {
          labels: labels,
          datasets: [{
            label: 'States',
            outline: nation,
            data: values,
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            },
          },
          scales: {
            projection: {
              axis: 'x',
              projection: 'albersUsa'  
            },
            color: {
              axis: 'x',
              interpolate: 'interpolateOrRd',
              quantize: 10,
              legend: {
                position: 'bottom-right',
                align: 'bottom'
              },
            }
          },
        }
      });
    });
  });
</script>
