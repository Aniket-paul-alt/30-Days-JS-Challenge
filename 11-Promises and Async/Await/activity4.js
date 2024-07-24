//Activity 4 - Fetching Data from an API
//Task 6

function fetchData() {
    fetch(`https://api.github.com/users/Aniket-paul-alt`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Network response was not ok (status: ${response.status})`)
            }
            return res.json()
        })
        .then((data) => console.table([data.name, data.followers]))
        .catch(err => console.error("err is : " + err))
}

fetchData()

//Task 7

async function fetchGitHubUserData(username) {

    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok (status: ${response.status})`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


fetchGitHubUserData('Aniket-paul-alt');
