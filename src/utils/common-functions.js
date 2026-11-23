const API_URL =
    "https://api.open-meteo.com/v1/forecast" +
    "?latitude=22.237729937606435" +
    "&longitude=68.9673493474582" +
    "&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m" +
    "&timezone=Asia%2FKolkata";

export function getWeatherDescription(code) {
    if (code === 0) return 'Clear Sky';
    if (code === 1) return 'Mainly Clear';
    if (code === 2) return 'Partly Cloudy';
    if (code === 3) return 'Overcast';
    if (code === 45 || code === 48) return 'Foggy';
    if (code >= 51 && code <= 55) return 'Drizzle';
    if (code >= 61 && code <= 65) return 'Rainy';
    if (code >= 71 && code <= 77) return 'Snow';
    if (code >= 80 && code <= 82) return 'Rain Showers';
    if (code >= 95) return 'Thunderstorm';
    return 'Pleasant Breeze';
}

export function getWeatherConditionGu(code) {
    if (code === 0) return 'સ્વચ્છ આકાશ';
    if (code === 1) return 'મુખ્યત્વે સ્વચ્છ';
    if (code === 2) return 'આંશિક વાદળછાયું';
    if (code === 3) return 'વાદળછાયું વાતાવરણ';
    if (code === 45 || code === 48) return 'ધુમ્મસ';
    if (code >= 51 && code <= 55) return 'ઝરમર વરસાદ';
    if (code >= 61 && code <= 65) return 'વરસાદ';
    if (code >= 80 && code <= 82) return 'વરસાદી ઝાપટાં';
    if (code >= 95) return 'ગાજવીજ સાથે વરસાદ';
    return 'ખુશનુમા પવન';
}

export async function getDwarkaWeather() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Failed to fetch weather: ${response.statusText}`);
        }

        const data = await response.json();
        const current = data.current || {};
        const weatherCode = current.weather_code ?? 0;
        const temperature = Math.round(current.temperature_2m ?? 26);
        const apparentTemperature = Math.round(current.apparent_temperature ?? temperature);
        const humidity = current.relative_humidity_2m ?? 55;
        const windSpeed = Math.round(current.wind_speed_10m ?? 12);

        return {
            ...data,
            temperature,
            apparentTemperature,
            humidity,
            windSpeed,
            weatherCode,
            conditionEn: getWeatherDescription(weatherCode),
            conditionGu: getWeatherConditionGu(weatherCode),
        };
    } catch (error) {
        console.error("Error fetching Dwarka weather:", error);
        // Fallback default so hero always renders smoothly
        return {
            temperature: 26,
            apparentTemperature: 26,
            humidity: 55,
            windSpeed: 12,
            weatherCode: 0,
            conditionEn: 'Clear Sky',
            conditionGu: 'સ્વચ્છ આકાશ',
            current: {
                temperature_2m: 26,
                apparent_temperature: 26,
                relative_humidity_2m: 55,
                wind_speed_10m: 12,
                weather_code: 0
            }
        };
    }
}
