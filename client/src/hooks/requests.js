const API = 'http://localhost:8000'
async function httpGetPlanets() {
  const response = await fetch(`${API}/planets`);
  return response.json();
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch(`${API}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a,b)=>{
    return a.fligthNumber-b.fligthNumber;
  });
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${API}/launches`,{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(launch),
    })
  }catch(e){
    return {
      ok:false,
    };
  }
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  try{
    return await fetch(`${API}/launches/${id}`,{
      method:"delete",
    })
  }catch(e){
    console.log(e);
    return {
      ok:false,
    }
  }
  
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};