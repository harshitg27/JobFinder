import React, { useState } from 'react'
import {getJobsByQuery} from '../../api/Job'
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';


function FilterJobs({ setFilterJobs , token }) {
  const navigate = useNavigate()
  const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js' , 'MongoDB' , 'DSA' , 'DBMS' , 'OOPS' , 'Operating System']
  const [searchQuery, setSearchQuery] = useState('');
  const [skillsQuery, setSkillQuery] = useState([])
  const jobs = async () => {
    try {
      const response = await getJobsByQuery(searchQuery , skillsQuery);
      if(response.status == 200){
        setFilterJobs(response.data.jobs)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const removeskill = (idx) =>{
    // skillsQuery.splice(idx , 1 )
    // console.log(skillsQuery)
    // const aa = skillsQuery
    setSkillQuery(skillsQuery.filter((skill , index) => index !== idx))
  }
  const handleAddSkill = (skill) => {
    if(skillsQuery.includes(skill)){
      return
    }
    setSkillQuery([...skillsQuery , skill])
  }
  // const tok = useSelector(store => store)
  // console.log(tok)
  // const token = localStorage.getItem('userToken')
  return (
    <div className='filterJobs'>
      <div className="searchBar">
        <input type='text' placeholder='Type any job title' value={searchQuery} onInput={e => setSearchQuery(e.target.value)} />
      </div>
      <div className="filters">
        <div className='skillsSection' >
          <select id="Skills" defaultValue={"skills"} onChange={ e => handleAddSkill(e.target.value)} >
            <option value="skills" disabled  >Skills</option>
            {skills.map((skill, index) => {
              return <option key={index} value={skill} >{skill} </option>
            })}
          </select>
          <div>
            <div className='skillsShown'>
              {skillsQuery.map((skill, index) => {
                return <div className='skillsChip' key={index} ><p>{skill}</p><div onClick={() => removeskill(index)}>X</div></div>
              })}
            </div>
            {/* {token && <div>Clear</div>} */}
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column' , gap: '5px'  }}>
          {token && <button onClick={() => navigate('/addjob')} className='addJobPageButton' >+ Add Job</button>}
          <div style={{display: 'flex' , gap: '10px'}} >
            <button className='orangeButton' onClick={jobs}> Apply Filter </button>
            <button className='clearButton' onClick={()=> {
              setSkillQuery([]) 
              setSearchQuery('')
            } }> clear</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FilterJobs
