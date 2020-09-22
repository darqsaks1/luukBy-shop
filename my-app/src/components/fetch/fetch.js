const getApiFromLinkOpttop24 = async () => {
    const url = 'https://opttop24.ru/';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    return data;
};


export default getApiFromLinkOpttop24