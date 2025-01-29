export async function retrieveWeatherData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=B5S6D9FC2HU799G9X2B6QSQYK&contentType=json`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }
        const responseObject = await response.json();
        return responseObject;
    } catch (error) {
        console.err(error.message);
    }
}

export async function retrieveGif(valueToSearch) {
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=96hwjEWRpXYc3YVHw3G3YbSTK3fslPO3&s=${valueToSearch}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error Status: ${response.status}`);
        }
        console.log(data);
        const gifUrl = data["data"]["images"]["original"]["url"];
        return gifUrl;
    } catch (error) {
        console.log(error.message);
    }
}
