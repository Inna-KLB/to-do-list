async function getData(link) {
  const responce = await fetch(link, {
    method: 'GET',
  });
  let res = await responce.json();
  return res;
  
} 

export default getData;