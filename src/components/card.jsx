import React from 'react'

const card = ({data}) => {
    console.log(data)
  return (
    <div>
        
          
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.des}</p>
                    <img width={200} src={data.img} alt="" />
                    <button>{data.buttonText}</button>
                </div>
       
     
    </div>
  )
}

export default card