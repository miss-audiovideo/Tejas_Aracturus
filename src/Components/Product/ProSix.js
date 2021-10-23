import React, {useState} from 'react'
import './prosix.css'

export default function ProSix() {
    const Data = [
        {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        },
        {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        },  
        {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        },  {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        },
        {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        }
      ];


    
        const [clicked, setClicked] = useState(false);
      
        const toggle = index => {
          if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
          }
      
          setClicked(index);
        };
    return (
        <> 

 


    <section className="hero hero-container is-small is-light ">
      <div className="hero-body prothree-hero-body">
      <h1 className="accordin-head mt-3 mb-3 fs-2">Specification</h1>

        

        <div className="container-acco">
            <div className='AccordionSection '>
            <div className=''>
            {Data.map((item, index) => {
                return (
                <div>
                    <div className='Wrap' onClick={() => toggle(index)} key={index}>
                    <h2 class="accordin-que">{item.question}</h2>
                    <span>{clicked === index ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                    </div>
                    {clicked === index ? (
                    <div className='Dropdown-span'>
                        <span><b style={{paddingRight:'5px'}}>Answer:</b> {item.answer1}</span>
                        <span><b style={{paddingRight:'5px'}}>Answer: </b>{item.answer2}</span>
                        <span><b style={{paddingRight:'5px'}}>Answer: </b>{item.answer3}</span>
                    </div>
                    ) : null}
                </div>
                );
            })}
            </div>
        </div>
      </div>
      </div>
      </section>


            
        </>
    )
}

            
