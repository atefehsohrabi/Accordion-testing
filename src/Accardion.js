import React, { useEffect, useState } from 'react';
import {Accordion} from 'react-bootstrap';


const generateAccordion = (data)=>{
    return(
        <Accordion defaultActiveKey='0' >

            {data?.map((item, index) => (
                
                    <Accordion.Item eventKey={index} key={item.name} className='item'>
                        <Accordion.Header>
                            {item.name}
                        </Accordion.Header>
                        <Accordion.Body>
                         
                            {item?.children?.length>0
                            ?generateAccordion(item.children)
                            :null}
                                
                                    </Accordion.Body>
                                </Accordion.Item>
            ))}

        </Accordion>
    );
};


const Accardion=()=> {
    const[products,setProduct]=useState([]);
useEffect(()=>{
    fetch('https://mohsenfathipour.com/api/categories.json')
    .then(Response=>Response.json())
    .then(data=>setProduct(data));
},[]);
    return <div className="mt-5 p-3">{generateAccordion(products)}</div>
        
};
export default Accardion;