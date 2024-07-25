//Activity 5 - Graceful Error handle in Fetch
//Task 8

function fetchDataFromInvalidUrl() {
    const invalidUrl = 'https://abcdegjhbahjcbaxnasx-hjdbdjh.com';
  
    fetch(invalidUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not OK (status ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        // Process the data (if needed)
        console.log('Data received:', data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  }
  
  // Call the function to see it in action
  fetchDataFromInvalidUrl();
  



//Task 9 


async function fetchGitHubUserData() {

    try {
        const url = `https://lkjklhsdl-oijfoiw.com`; //invalid url
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok (status: ${response.status})`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}


fetchGitHubUserData();