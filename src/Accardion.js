import React, { useEffect, useState } from 'react';
import {Accordion} from 'react-bootstrap';

const Accardion=()=> {
    const[products,setProduct]=useState()
useEffect(()=>{
    fetch('https://mohsenfathipour.com/api/categories.json')
    .then(Response=>Response.json())
    .then(data=>setProduct(data))
},[])
    return (
        <Accordion defaultActiveKey='0' className='mt-5 p-3'>

            {products.map(product => (
                <>
                    <Accordion.Item eventKey='0'  className='item'>
                        <Accordion.Header>
                            {product.name}
                        </Accordion.Header>
                        <Accordion.Body>
                            return(
                            {products.children.map(child => (<>
                                <Accordion.Item eventKey='0'  className='item'>
                                    <Accordion.Header>
                                        {child.name}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </>))}
                            )
                           
                        </Accordion.Body>
                    </Accordion.Item>
                </>
               
            ))}
        
     </Accordion>
    );
}

export default Accardion;