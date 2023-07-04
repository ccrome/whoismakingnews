function createReverseLookup(obj) {
    const reverseLookup = {};
    for (const [key, values] of Object.entries(obj)) {
	for (const value of values) {
            reverseLookup[value] = key;
	}
    }
    return reverseLookup;
}

grouping = {
    'Religious Employment': ['Pastors', 'Church Employees', 'Priests/Brothers', 'Priests/brothers', 'Missionary', 'Mormon leaders'],
    'Police': [ 'Cop' ],
    'Family/Known': [ 'Family Member', 'Day Care/babsyitter', 'Day Care/babysitter', 'Family Friend/neighbor'],
    'Teacher': [ 'Teachers/aides', 'Coach'],
};

const reverseLookup = createReverseLookup(grouping);

// d is a map of category -> count
// use the reverse lookup to group categories
// anything that doesn't exist as a key in the reverse lookup
// is left alone.
function group_cats(d) {
    const new_d = new Map();
    for (const [key, value] of d.entries()) {
        const new_key = reverseLookup[key];
        if (new_key === undefined) {
            new_d.set(key, value);
        } else {
            const old_value = new_d.get(new_key);
            if (old_value === undefined) {
                new_d.set(new_key, value);
            } else {
                new_d.set(new_key, old_value + value);
            }
        }
    }
    return new_d;
}


// Return a promise for all rows of the data
// this will always be sorted most recent first.
async function fetch_data(url="data.csv") {
    url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsWWugIo1pp0Xc1WmMmvawFzQslpUqlIMCjw3JhwOrW2sS6gOvXv3C_TV9eHAD46wjiaqzPNvLbRUT/pub?gid=1732993794&single=true&output=csv';
    let df = await d3.csv(url);
    const parseDate = d3.timeParse("%m/%d/%Y");
    df.forEach(function(d) {
        d.Date = parseDate(d.Date);
        d["Trans"] = (d["Trans"].toLowerCase() === "true");
        d["Drag Queen"] = (d["Drag Queen"].toLowerCase() === "true");
        d["Deleted"] = (d["Deleted"].toLowerCase() === "true");
    });
    df = df.filter(function(d) {return d.Date != null});
    df = df.filter(function(d) {return !d.Deleted });
    df.sort(function(a, b) {
        return b.Date - a.Date;
    });
    return {df: df};
}

function summarize_data(df, group_categories=true) {
    let ru = d3.rollup(df, v => v.length, d => d.Category);
    if (group_categories) {
        ru = group_cats(ru);
    }
    // order by value
    for (var x of ["Trans", "Drag Queen"]) {
        ru.set(x, d3.sum(df.map(row => row[x] ? 1 : 0)));
    }
    ru = new Map([...ru.entries()].sort((a, b) => b[1] - a[1]));
    return {
        labels: [...ru.keys()],
        values: [...ru.values()]
    };
}

crime_db = fetch_data();

//            id = document.getElementById('mychart');
//            data = {
//	        labels: [...ru.keys()],
//	            datasets: [{
//	                label: '# of cases',
//	                data: [...ru.values()],
//	                borderWidth: 1,
//                    }]
//    };
//    options = {
//        legend: {
//            display: false
//        },
//        tooltips: {
//            enabled: false
//        }
//    };
//    new Chart(id,
//              {
//                  type: 'bar',
//	          data: data,
//                  options: options,
//              }
//             )
//}).catch((message) => {
//    window.alert("Data failed to load" + message);
//    console.log("data load failed" + message);
//});
