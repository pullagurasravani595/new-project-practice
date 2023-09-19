import {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Registeration = (props) => {
    const [level, setDifficultyLevel] = useState("")

    const showSetLevel = () => {
        const {changeLevelStatus} = props
        changeLevelStatus(level)
    }

    const changeSelect = (event) => {
        setDifficultyLevel(event.target.value)
        const showLevelType = showSetLevel()
        console.log(showLevelType);
    }

    return (
        <div className='bg-container'>
            <div className='register-container'>
                <div className='input-container'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" className='input' />
                </div>
                <div className='input-container'>
                    <label htmlFor='email'>Email:</label>
                    <input type="text" id="email" className='input' />
                </div>
                <div className='input-container'>
                    <label htmlFor='mobile'>Mobile number:</label>
                    <input type="text" id="mobile" className='input' />
                </div>
                <div className='input-container'>
                    <label htmlFor='level'>diffculty-level:</label>
                    <select onChange={changeSelect} className='input'>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </div>
                <Link to="/" className='nav-link'>
                    <button type="button" className='submit-btn'>submit</button>
                </Link>
            </div>
        </div>
    )
}

export default Registeration
 