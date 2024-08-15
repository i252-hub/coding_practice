function unique(arr) {
    return [...new Set(arr)];
  }
  
  let arr = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  console.log(unique(arr));