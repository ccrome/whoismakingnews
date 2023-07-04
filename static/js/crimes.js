// p = d3.csv("data.csv");
// 
// function createReverseLookup(obj) {
//     const reverseLookup = {};
//     for (const [key, values] of Object.entries(obj)) {
// 	for (const value of values) {
//             reverseLookup[value] = key;
// 	}
//     }
//     return reverseLookup;
// }
// 
// grouping = {
//     'Religious Employment': ['Pastors', 'Church Employees', 'Priests/Brothers', 'Priests/brothers', 'Missionary', 'Mormon leaders'],
//     'Police': [ 'Cop' ],
//     'Family/Known': [ 'Family Member', 'Day Care/babsyitter', 'Day Care/babysitter', 'Family Friend/neighbor'],
//     'Teacher': [ 'Teachers/aides', 'Coach'],
// };
// 
// const reverseLookup = createReverseLookup(grouping);
// 
// function group_cats(d, grouping) {
//     result = new Map();
//     for (let [k, v] of d) {
// 	if (k in reverseLookup) {
// 	    nk = reverseLookup[k];
// 	} else {
// 	    nk = k;
// 	}
// 	if (nk in result.keys()) {
// 	    console.log(0);
// 	    result.set(nk, v + result[nk]);
//  	} else {
// 	    console.log(1);
// 	    result.set(nk, v);
// 	}
// 	console.log(k, nk, result);
//     }
//     return result;
// }
// 
// 
// p.then((df) => {
//     df = df.filter(function(d) {return d.Date != ""});
//     ru = d3.rollup(df, v => v.length, d => d.Category);
//     id = document.getElementById('mychart');
//     ru = group_cats(ru, grouping)
//     data = {
// 	            labels: [...ru.keys()],
// 	            datasets: [{
// 	                label: '# of cases',
// 	                data: [...ru.values()],
// 	                borderWidth: 1,
//                     }]
//     };
//     options = {
//         legend: {
//             display: false
//         },
//         tooltips: {
//             enabled: false
//         }
//     };
//     new Chart(id,
//               {
//                   type: 'bar',
// 	          data: data,
//                   options: options,
//               }
//              )
// }).catch((message) => {
//     window.alert("Data failed to load" + message);
//     console.log("data load failed" + message);
// });
// 
