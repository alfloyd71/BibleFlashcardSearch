// Specify the URL you want to fetch data from
const html_box_page = document.getElementById("html-box-page")
const card_question = document.getElementById("card-question")

const url = 'card/';
let fetched_data

const processFetchedData = (fetched_data)=>{
  
  html_box_page.innerHTML = fetched_data; // Set inner HTML with the response text
  card_question.innerHTML = "will this get updated" // This will not work as "card.html" will have to be fetched again.
}

fetch(url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json' // Specify the expected response type
    }
})
.then(response => {
    // Check the content type of the response
    const contentType = response.headers.get('content-type');
    
    if (contentType.includes('application/json')) {
        return response.json(); // Parse JSON response
    } else if (contentType.includes('text/html')) {
        return response.text().then(text => {
            fetched_data = text
            processFetchedData(fetched_data)
            
        }).catch(error => {
            console.error('Error fetching HTML:', error);
        });
    } else {
        throw new Error('Unsupported response type');
    }
})
.catch(error => {
    console.error('Error:', error);
});