
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();

    // Check if the response is HTML
    if (text.startsWith('<!DOCTYPE html>')) {
      throw new Error('Received HTML instead of JSON');
    }

    // Parse the response as JSON
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default fetchData;
