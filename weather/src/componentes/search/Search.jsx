 
 const Search = () => {
    const getData = async (url, setState) => {
      const res = await fetch(url);
      const datos = await res.json();

      setState(datos);
    };

    //// aca esta el use efect
    useEffect(() => {
      getData(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric`,
        setData
      );
    }, [country]);


    return (

    <>
    </>
)
 }
 export default Search