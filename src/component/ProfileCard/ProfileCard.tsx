import './style/ProfileCardStyle.scss'
import profileImg from '../../assets/generalImage/profileImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faLocation } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';


export const ProfileCard = () =>{

    const [windowDimensions, setWindowDimensions] = useState({
        wWidth: window.innerWidth,
        wHeight: window.innerHeight
    })

    useEffect(() => {
        const handleResizeWindowDimensions = ()=>{
            setWindowDimensions({
                wWidth: window.innerWidth,
                wHeight: window.innerHeight,
            })
        }
        window.addEventListener('resize',handleResizeWindowDimensions)
        return(()=>{
            window.removeEventListener('resize',handleResizeWindowDimensions)
        })
    },[])

    return(
        <div className='profileCard'>
            {/* profile information group */}
           <div className='gernalInformation'>
            <img src={profileImg} alt="" />
            <p className='generalInformation_author'>KHOA TRUONG</p>
            <p className='generalInformation_jobtitle'>SOFTWARE DEVELOPER</p>
            <div className='generalInformation_dash'></div>
           </div>
      {
        windowDimensions.wWidth > 758 &&(
            <div className='contactInformation'>
            <div className='contactInformation_line'>
            <div className='contactInformation_line_icon'>
            <FontAwesomeIcon icon={faEnvelope} className='fa-lg' /> 
            </div>
            <div className='contactInformation_line_text'>
                <p>Email</p>
                <p>tdkhoa.aqua@gmail.com</p>
            </div>
            </div>
            <div className='contactInformation_line'>
            <div className='contactInformation_line_icon'>
            <FontAwesomeIcon icon={faPhone} className='fa-lg' /> 
            </div>
            <div className='contactInformation_line_text'>
                <p>Telephone</p>
                <p>(+358)41 3108 118</p>
            </div>
            </div>
            <div className='contactInformation_line'>
            <div className='contactInformation_line_icon'>
            <FontAwesomeIcon icon={faLocation} className='fa-lg' /> 
            </div>
            <div className='contactInformation_line_text'>
                <p>Location</p>
                <p>Helsinki Finland</p>
            </div>
            </div>
           </div>
        )
      }
           {/* detail information */}
           <div className='socialMedia'>
            <div className='socialMediaIc'>
            <FontAwesomeIcon icon={faGithub} className='fa-lg' /> 
            </div>
            <div className='socialMediaIc'>
            <FontAwesomeIcon icon={faGitlab} className='fa-lg' /> 
            </div>
            <div className='socialMediaIc'>
            <FontAwesomeIcon icon={faLinkedin} className='fa-lg' /> 
            </div>
           </div>
           {/* social media icons group */}
        </div>
    )
}