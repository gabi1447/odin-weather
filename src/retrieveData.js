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
