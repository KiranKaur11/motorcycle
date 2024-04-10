const form = document.getElementById('timezoneForm');
const resultDiv = document.getElementById('result'); 

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    
   
    const apiKey = 'C4JFZFBbp3XR6d1Iaq4Fow==een9oqXoQbm0CITR';
   
    const url = `https://api.api-ninjas.com/v1/motorcycles?make=${encodeURIComponent(brand)}&country=${encodeURIComponent(model)}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            
            resultDiv.textContent = JSON.stringify(data, null, 2);
        } else {
            resultDiv.textContent = 'Error: ' + response.status;
        }
    } catch (error) {
        resultDiv.textContent = 'Error: ' + error.message;
    }
});
