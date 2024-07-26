/**
 * @param {string} s
 * @return {boolean}
 * Input: s = "()[]{}"
 * Output: true
 * ({}) (()) [{()}]
 * ()(({{)})
 */
// var isValid = function (s) {
//   const ps = s.split("");
//   const store = [];
//   if (ps.length % 2 === 0) {
//     ps.forEach((item, index) => {
//       if (item === "(") {
//         store.push("(");
//       } else if (item === "{") {
//         store.push(item);
//       } else if (item === "[") {
//         store.push(item);
//       } else if (item === ")") {
//         store.splice(index, 1);
//       } else if (item === "}") {
//         store.splice(index, 1);
//       } else if (item === "]") {
//         store.splice(index, 1);
//       }
//     });
//   }
//
//   console.log(ps, ps.length, store);
//   return store.length === 0;
// };
var isValid = function (s) {
  const ps = s.split("");
  const store = [];
  let ck = 0;

  ps.forEach((i, idx) => {
    if (ps.length !== idx + 1 && ps.length % 2 === 0) {
      if (i === "(" && ps[idx + 1] === ")") {
        ck = 1;
      } else if (i === "{" && ps[idx + 1] === "}") {
        ck = 1;
      } else if (i === "[" && ps[idx + 1] === "]") {
        ck = 1;
      } else {
        ck = 0;
      }
    }
  });

  console.log(ps, ps.length, ck);
  return ck === 1;
};

let categoryArr = [
  {
    "id": 1,
    "title": "Sales",
    "description": null,
    "created_by": null,
    "featured": 1,
    "total_jobs": 10
  },
  {
    "id": 2,
    "title": "Marketing",
    "description": null,
    "created_by": null,
    "featured": 1,
    "total_jobs": 9
  },
  {
    "id": 3,
    "title": "Technology",
    "description": null,
    "created_by": null,
    "featured": 1,
    "total_jobs": 10
  },
  {
    "id": 4,
    "title": "Finance",
    "description": null,
    "created_by": null,
    "featured": 1,
    "total_jobs": 7
  },
  {
    "id": 5,
    "title": "Engineering",
    "description": null,
    "created_by": null,
    "featured": 1,
    "total_jobs": 11
  },

]
let categorySelect = [true, true, false,true,false]
const selectedCategories = categoryArr.filter((category, index) => categorySelect[index])
  .map((category) => category.id);



let data = {
  "categories": {
    "1": {
      "id": 1,
      "title": "Sales",
      "description": null,
      "created_by": null,
      "featured": 1,
      "total_jobs": 10
    },
    "3": {
      "id": 3,
      "title": "Technology",
      "description": null,
      "created_by": null,
      "featured": 1,
      "total_jobs": 10
    },

    "11": {
      "id": 11,
      "title": "Hospitality",
      "description": null,
      "created_by": null,
      "featured": 0,
      "total_jobs": 0
    },

  },
  "experience": {
    "1": {
      "id": 1,
      "title": "0-2 yrs",
      "cmin": 0,
      "cmax": 2
    },
    "2": {
      "id": 2,
      "title": "2-5 yrs",
      "cmin": 2,
      "cmax": 5
    },
    "3": {
      "id": 3,
      "title": "6-10 yrs",
      "cmin": 6,
      "cmax": 10
    },
    "min": 0,
    "max": 10
  },
  "jobType": {
    "1": {
      "id": 1,
      "title": "Internship"
    },
    "2": {
      "id": 2,
      "title": "Part Time"
    }
  },
  "jobSite": {
    "2": {
      "id": 2,
      "title": "Remote"
    }
  },
}

let transformedarray = [
  {
    "id": 1,
    "title": "Sales",
    "description": null,
    "created_by": null,
    "featured": 1,
    "total_jobs": 10,
    filterType: 1
  },
  {
    "id": 3,
    "title": "Technology",
    "description": null,
    "created_by": null,
    "featured": 1,
    "total_jobs": 10
    filterType: 1
  },
  {
    "id": 11,
    "title": "Hospitality",
    "description": null,
    "created_by": null,
    "featured": 0,
    "total_jobs": 0
    filterType: 1
  },
  {
    "id": 1,
    "title": "0-2 yrs",
    "cmin": 0,
    "cmax": 2,
    filterType: 2
  },
  {
    "id": 2,
    "title": "2-5 yrs",
    "cmin": 2,
    "cmax": 5,
    filterType: 2
  },
  {
    "id": 3,
    "title": "6-10 yrs",
    "cmin": 6,
    "cmax": 10,
    filterType: 2
  },
  {
    "id": 1,
    "title": "Internship",
    filterType: 3
  },
  {
    "id": 2,
    "title": "Part Time",
    filterType: 3
  },
  {
    "id": 2,
    "title": "Remote",
    filterType: 4
  }
]
data = {"categories": {}, "experience": {}, "jobType": {}, "jobSite": {}}

let transformedarray2 = [
  ...Object.values(data.categories),
  ...Object.values(data.experience),
  ...Object.values(data.jobType),
  ...Object.values(data.jobSite)
].filter(item => typeof item === "object");
let transformedarray3 =  transformedarray2?.filter(item => typeof item === "object")
console.log(transformedarray2);

let transformedarray = [];

// Transform categories
Object.values(data.categories).forEach(category => {
  transformedarray.push({
    ...category,
    filterType: 1
  });
});

// Transform experience
Object.values(data.experience).forEach(exp => {
  transformedarray.push({
    ...exp,
    filterType: 2
  });
});

// Transform jobType
Object.values(data.jobType).forEach(jobType => {
  transformedarray.push({
    ...jobType,
    filterType: 3
  });
});

// Transform jobSite
Object.values(data.jobSite).forEach(jobSite => {
  transformedarray.push({
    ...jobSite,
    filterType: 4
  });
});

console.log(transformedarray);

const testExp = {
  "1": {
    "id": 1,
    "title": "0-2 yrs",
    "cmin": 0,
    "cmax": 2
  },
  "2": {
    "id": 2,
    "title": "2-5 yrs",
    "cmin": 2,
    "cmax": 5
  },
  "3": {
    "id": 3,
    "title": "6-10 yrs",
    "cmin": 6,
    "cmax": 10
  },
  "min": 0,
  "max": 10
}



// console.log(isValid("()[]{}"));
// console.log(isValid("({})"));
