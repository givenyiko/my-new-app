document.addEventListener('DOMContentLoaded', () => {
    fetchZohoData();
});

async function fetchZohoData() {
    const accessToken = 'Zoho is not Responding'; 
    const response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
        headers: {
            'Authorization': `Zoho-oauthtoken ${accessToken}`
        }
    });

    if (!response.ok) {
        console.error('Failed to fetch data from Zoho');
        return;
    }

    const data = await response.json();
    displayData(data);
}

function displayData(data) {
    const container = document.getElementById('crm-data');
    data.data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `Lead Name: ${item.Full_Name}`;
        container.appendChild(div);
    });
}