//Activity 2 - Chaining Promises
//Task 3

function fetchApiData(step) {
    const url = `https://jsonplaceholder.typicode.com/posts/${step}`;
  
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(`Data fetched for step ${step}:`, data);
        return data;
      });
  }
  
  // Sequence of API calls
  fetchApiData(1)
    .then((data1) => {
        setTimeout(() => {
            console.log(`Result from step 1:`, data1);
        }, 2000);
      return fetchApiData(2);
    })
    .then((data2) => {
        setTimeout(() => {
            console.log(`Result from step 2:`, data2);
        }, 4000);
      return fetchApiData(3);
    })
    .then((data3) => {
        setTimeout(() => {
            console.log(`Result from step 3:`, data3);
        }, 6000);
      console.log("All data fetched");
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  