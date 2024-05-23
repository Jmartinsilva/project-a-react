import './whatGP3.css'
import { HiMiniMinus } from "react-icons/hi2";



export const WhatGP3 = () => {

 

  return (
    <div className='gpt3'>
      <section className='gpt3__general'>
            <article className='gpt3__general-uno'>
              <h2>What is GPT-4</h2>
              
              <p> An artificial intelligence system called GPT-4 has been trained to talk to people in any language.
                  Its operation depends on analyzing the words written by the user, understanding their order and meaning, and interpreting what is meant.
                  GPT-4's creativity and cooperation surpass those of its predecessors.</p>
            </article>
              
            <div className='gpt3__general-dos'>
              <h1>The possibilities are beyond your imagination</h1>
            </div>

            <article className='gpt3__general-tres'>
              <li className='gpt3__general-tres__chatbots'>
                  <HiMiniMinus color='#F7F9F8'size={40} />
                  <h2>Chatbots</h2>
                  <p>A chatbot is a computer program that uses artificial intelligence (AI) and natural language processing
                    (NLP) to understand customer questions and automate responses, simulating a human conversation.</p>
              </li>
              <li className='gpt3__general-tres__know'>
                  <HiMiniMinus color='#F7F9F8'size={40} />
                  <h2>Knowledgebase</h2>
                  <p>A knowledge base is a self-service online library that contains information about a product, service, department, or topic.</p>
              </li>
              <li className='gpt3__general-tres__education'>
                  <HiMiniMinus color='#F7F9F8'size={40} /> 
                  <h2>Education</h2>
                  <p> It has the potential to transform education by providing personalized assistance, improving teacher efficiency, and ensuring that all students have access to high-quality learning opportunities..</p>
                  
              </li> 
            </article>
      </section>
    </div> 
  )
}
           
             
              
              
          
        
        
        
        
          
