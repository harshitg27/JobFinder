import React, { useState } from 'react'
import {getJobsByQuery} from '../../api/Job'


function FilterJobs({ setFilterJobs }) {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js']
  const [searchQuery, setSearchQuery] = useState('');
  const [skillsQuery, setSkillQuery] = useState([])
  const jobs = async () => {
    console.log('click')
    try {
      const response = await getJobsByQuery(searchQuery , skillsQuery);
      setFilterJobs(response)
    } catch (error) {
      console.log(error)
    }
  }
  const token = localStorage.getItem('userToken')
  return (
    <div className='filterJobs'>
      <div className="searchBar">
        <input type='text' placeholder='Type any job title' value={searchQuery} onInput={e => setSearchQuery(e.target.value)} />
      </div>
      <div className="filters">
        <div className='skillsSection' >
          <select id="Skills" defaultValue={"skills"} onChange={ e => setSkillQuery([...skillsQuery , e.target.value])} >
            <option value="skills" disabled  >Skills</option>
            {skills.map((skill, index) => {
              return <option key={index} value={skill} >{skill} </option>
            })}
          </select>
          <div>
            <div className='skillsShown'>
              {skillsQuery.map((skill, index) => {
                return <p key={index} >{skill}</p>
              })}
            </div>
            {token && <div>Clear</div>}
          </div>
        </div>
        <div>
          {token && <button className='orangeButton addJobButton' >+ Add Job</button>}
          {!token && <div style={{display: 'flex' , gap: '10px'}} >
            <button className='orangeButton' onClick={jobs}> Apply Filter </button>
            <button className='clearButton' onClick={()=> {
              setSkillQuery([]) 
              setSearchQuery('')
            } }> clear</button>
          </div>}

        </div>
      </div>
    </div>
  )
}

export default FilterJobs
