import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


interface EducationProps{
    nextView: () => void
    prevView: () => void
}

const Education: FC<EducationProps> = (props) => {
    const [degreeLevelOption, setDegreeLevelOption] = useState("")

    const handleDegreeLevelSelect = (e:any) => {
        setDegreeLevelOption(e.target.value)
    }
    
    return(
        <div className="education-form-container">
           <h2 className="education-form-title"> Education Form </h2>
           <button className="next-view-button" onClick={props.nextView}> Next </button>
           <form> 
                <div className="education-entry-container">
                    <h3 className="education-entry-title"> Education 1 </h3>
                    
                    <div className="institution-container">
                        <label className="institution-label"> Institution Name </label>
                        <input
                            type="text"
                            className="institution-input"
                            required
                        />
                    </div>

                    <div className="major-container">
                    <label className="major-label"> Major </label>
                    <input
                        type="text"
                        className="major-input"
                    />

                    <label className="degree-level-label"> Degree Level </label>
                        <select className="degree-level-dropdown" onChange={handleDegreeLevelSelect}>
                            <option value=""> Select an option: </option>
                            <option value="bachelors"> Bachelors </option>
                            <option value="masters"> Masters </option>
                            <option value="doctorate"> Doctorate </option>
                            <option value="associate"> Associate </option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="submit-education"> Submit </button>
            </form>
        </div>
    )
}

export default Education