export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '048f7bdbb4msh012a3a6ca1a06e5p15b27cjsnb70ad5da8217',
  }
};


export const youtubeOptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '048f7bdbb4msh012a3a6ca1a06e5p15b27cjsnb70ad5da8217',
	}
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};