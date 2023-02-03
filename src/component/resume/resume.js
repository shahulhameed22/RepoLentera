import React,{useState,useEffect} from 'react';
import './resume.css';
export function Resume(){
    const[details,setDetails]=useState([])
    useEffect (()=>{
        fetch("http://localhost:3000/main.json")
        .then(respone=>respone.json())
        .then(json=>setDetails(json))
        console.log(details)

    },[] )
    return(
        <>
        {
            details.map((value,index)=>(

                <main class="main-content">
                <section class="left-section">
                    <div class="left-content">
                        <div class="profile">
                            <div class="image">
                                <img src={value.SPIDimg} alt=""/>
                            </div>
                            <h2 class="name">{value.Name}</h2>
                            <p class="career">{value.role}</p>
                        </div>
                        <div class="contact-info">
                            <h3 class="main-title">Contact Info</h3>
                            <ul>
                                <li>
                                    <i class="fa fa-phone"></i>
                                    {value.phone}
                                </li>
                                <li>
                                    <i class="fa fa-fax"></i>
                                    {value.email}
                                </li>
                                <li>
                                    <i class="fa fa-globe"></i>
                                    www.loremipsum.com
                                </li>
                                <li>
                                    <i class="fa fa-facebook"></i>
                                    www.facebook.com/lorem
                                </li>
                                <li>
                                    <i class="fa fa-instagram"></i>
                                    @loremipsum
                                </li>
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    37 Pramount St, London
                                </li>
                            </ul>
                        </div>
                        <div class="skills-section">
                            <h3 class="main-title">Skills</h3>
                            <ul>
                                <li>
                                    <p class="skill-title">{value.topskil1}</p>
                                    <div class="progress-bar">
                                        <div class="progress js-progress"></div>
                                    </div>
                                </li>
                                <li>
                                    <p class="skill-title">{value.topskill2}</p>
                                    <div class="progress-bar">
                                        <div class="progress ps-progress"></div>
                                    </div>
                                </li>
                                <li>
                                    <p class="skill-title">{value.topskil3}</p>
                                    <div class="progress-bar">
                                        <div class="progress j-progress"></div>
                                    </div>
                                </li>
                                <li>
                                    <p class="skill-title">{value.top}</p>
                                    <div class="progress-bar">
                                        <div class="progress c-progress"></div>
                                    </div>
                                </li>
                                <li>
                                    <p class="skill-title">Ruby</p>
                                    <div class="progress-bar">
                                        <div class="progress ps-progress"></div>
                                    </div>
                                </li>
                                <li>
                                    <p class="skill-title">Node js</p>
                                    <div class="progress-bar">
                                        <div class="progress n-progress"></div>
                                    </div>
                                </li>
                                <li>
                                    <p class="skill-title">html/css</p>
                                    <div class="progress-bar">
                                        <div class="progress ps-progress"></div>
                                    </div>
                                </li>
                                <li>
                                    <p class="skill-title">illustrator</p>
                                    <div class="progress-bar">
                                        <div class="progress ps-progress"></div>
                                    </div>
                                </li>
                                <li>
                                    <p class="skill-title">Wordpress</p>
                                    <div class="progress-bar">
                                        <div class="progress ps-progress"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="references-section">
                            <h3 class="main-title">References</h3>
                            <div class="referee">
                                <h6 class="sub-title">Michael Bowen</h6>
                                <p class="sub-para">Product Manager</p>
                                <ul>
                                    <li>
                                        <i class="fa fa-phone"></i>
                                        07661892982
                                    </li>
                                    <li>
                                        <i class="fa fa-fax"></i>
                                        loremipsum@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div class="referee">
                                <h6 class="sub-title">Joseph Kumar</h6>
                                <p class="sub-para">Senior Developer</p>
                                <ul>
                                    <li>
                                        <i class="fa fa-phone"></i>
                                        07661892982
                                    </li>
                                    <li>
                                        <i class="fa fa-fax"></i>
                                        loremipsum@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div class="referee">
                                <h6 class="sub-title">Rick Ross</h6>
                                <p class="sub-para">Product Manager</p>
                                <ul>
                                    <li>
                                        <i class="fa fa-phone"></i>
                                        07661892982
                                    </li>
                                    <li>
                                        <i class="fa fa-fax"></i>
                                        loremipsum@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="right-section">
                    <div class="right-main-content">
                        <section class="about sect">
                            <h2 class="right-title">About Me</h2>
                            <p class="para">
                            </p>
                        </section>
                        <section class="basic sect">
                            <h2 class="right-title">Basic Infomation</h2>
                            <p><span >Age</span>23</p>
                        </section>
                        <section class="experince sect">
                            <h2 class="right-title">Work Experience</h2>
                            <div class="timeline">
                                <div class="left-tl-content">
                                    <h5 class="tl-title"><img/></h5>
                                    <p class="para">2017 - 2019</p>
                                </div>
                                <div class="right-tl-content">
                                    <div class="tl-content">
                                        <h5 class="tl-title-2">Junior Developer</h5>
                                        <p class="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                            voluptatem deleniti, 
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="left-tl-content">
                                    <h5 class="tl-title">Google Inc</h5>
                                    <p class="para">2019 - 2020</p>
                                </div>
                                <div class="right-tl-content">
                                    <div class="tl-content">
                                        <h5 class="tl-title-2">Lead Web developer</h5>
                                        <p class="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                            voluptatem deleniti, 
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="left-tl-content">
                                    <h5 class="tl-title">Google Inc</h5>
                                    <p class="para">2019 - 2020</p>
                                </div>
                                <div class="right-tl-content">
                                    <div class="tl-content">
                                        <h5 class="tl-title-2">Lead Web developer</h5>
                                        <p class="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                            voluptatem deleniti, 
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="left-tl-content">
                                    <h5 class="tl-title">Apple</h5>
                                    <p class="para">2020 - Present</p>
                                </div>
                                <div class="right-tl-content">
                                    <div class="tl-content">
                                        <h5 class="tl-title-2">Senior Developer</h5>
                                        <p class="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                            voluptatem deleniti, 
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="education sect">
                            <h2 class="right-title">education</h2>
                            <div class="timeline">
                                <div class="left-tl-content">
                                    <h5 class="tl-title">Cheney School</h5>
                                    <p class="para">2015 - 2016</p>
                                </div>
                                <div class="right-tl-content">
                                    <div class="tl-content">
                                        <h5 class="tl-title-2">Gcse's</h5>
                                        <p class="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                            voluptatem deleniti, 
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="left-tl-content">
                                    <h5 class="tl-title">Cheney School</h5>
                                    <p class="para">2016 - 2018</p>
                                </div>
                                <div class="right-tl-content">
                                    <div class="tl-content">
                                        <h5 class="tl-title-2">A - Levels</h5>
                                        <p class="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                            voluptatem deleniti, 
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="left-tl-content">
                                    <h5 class="tl-title">University of Sussex</h5>
                                    <p class="para">2018 - Present</p>
                                </div>
                                <div class="right-tl-content">
                                    <div class="tl-content">
                                        <h5 class="tl-title-2">Computer Science</h5>
                                        <p class="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                            voluptatem deleniti, 
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="awards sect">
                            <h2 class="right-title">Awards</h2>
                            <div class="timeline">
                                <div class="left-tl-content">
                                    <h5 class="tl-title">Microsoft</h5>
                                    <p class="para">June 2016</p>
                                </div>
                                <div class="right-tl-content">
                                    <div class="tl-content">
                                        <h5 class="tl-title-2">Excellent Work</h5>
                                        <p class="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                            voluptatem deleniti, 
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="left-tl-content">
                                    <h5 class="tl-title">Alphabet Inc</h5>
                                    <p class="para">June 2016</p>
                                </div>
                                <div class="right-tl-content">
                                    <div class="tl-content">
                                        <h5 class="tl-title-2">The Star Employee</h5>
                                        <p class="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                            voluptatem deleniti, 
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
                ))
            }
        </>
    );
}