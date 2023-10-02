const KEY = '96b947a45d33d7dc1c49af3203966408'

const getData = async (city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const rec = `?q=${city}&units=metric&appid=${KEY}`
    toggleLoading(true);
    const req = await fetch(baseURL+rec)
    const data = await req.json();
    toggleLoading(false)
    return data;
}


