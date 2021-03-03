import React from 'react'
import { useState } from 'react'
import useFetchJobs from './useFetchJobs'
import {Container} from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination'
import SearchForm from './SearchForm'

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(2);
  const {jobs, loading, error} = useFetchJobs(params, page);

  function handleParamChange(e){
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams=>{
      return {...prevParams, [param]: value}
    })
  }

  return(
    <Container className="my-3">
      <h1 className="mb-5">Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange}/>
      <JobsPagination page={page} setPage={setPage}/>
      {loading ? <h1>Loading...</h1> : ''}
      {error ? <h1>Error</h1> : ''}
      {jobs.map(job => {
        return <Job key={job.id} job={job}/>
      })}
      <JobsPagination page={page} setPage={setPage}/>
    </Container>
  )
}

export default App;
