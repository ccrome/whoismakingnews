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
    url               = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFkO7ioMicWFaGDT7eqyojtDveMEm3ueefzorCz8YnrBcxqyB1NGnrT7cC6_7ci-uIffoo2d1oZikM/pub?gid=1882457294&single=true&output=csv';
    let organizations_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFkO7ioMicWFaGDT7eqyojtDveMEm3ueefzorCz8YnrBcxqyB1NGnrT7cC6_7ci-uIffoo2d1oZikM/pub?gid=1579004445&single=true&output=csv';
    let playlist_url      = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFkO7ioMicWFaGDT7eqyojtDveMEm3ueefzorCz8YnrBcxqyB1NGnrT7cC6_7ci-uIffoo2d1oZikM/pub?gid=1061101292&single=true&output=csv';
    let df = await d3.csv(url);
    const parseDate = d3.timeParse("%m/%d/%Y");
    let double_counted = 0;
    df.forEach(function(d) {
        d.Date = parseDate(d.Date);
        d["Trans"] = (d["Trans"].toLowerCase() === "true");
        d["Drag Queen"] = (d["Drag Queen"].toLowerCase() === "true");
        d["Deleted"] = (d["Deleted"].toLowerCase() === "true");
        if (d["Trans"] || d["Drag Queen"]) {
            double_counted += 1;
        }
    });
    df = df.filter(function(d) {return d.Date != null});
    df = df.filter(function(d) {return !d.Deleted });
    df.sort(function(a, b) {
        return b.Date - a.Date;
    });
    let org_df = await d3.csv(organizations_url);
    org_df.forEach(function(d) {
        d.Date = parseDate(d.Date);
    });

    let tiktok_df = await d3.csv(playlist_url);
    let result = {
        df: df,
        org: org_df,
        tiktok: tiktok_df,
        double_counted: double_counted,
    };
    return result;
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
