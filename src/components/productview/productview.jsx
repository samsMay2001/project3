import { useEffect, useState } from 'react'
import './productview.css'
import StickyBox from 'react-sticky-box'
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BottomSections } from '../home/bottomSections/bottomSections';
export const ProductView = () => {
    const [productImgs, setProductImgs] = useState(
        [
            '', 
            '', 
            '', 
            '', 
            '', 
        ])
    const [productColor, setProductColor] = useState(
        [
            '',
            '',
            '',
        ]
    )
    const [shoeSizes, setShoeSizes] = useState(
        ['3.5', '4', '4.5', '']
    )
    useEffect(()=> {
        let array = []
        for(let i = 0; i< 24; i++){
            array.push((i*0.5)+3.5);
        }
        setShoeSizes(array)
    }, [])
    return (
        <div className='product-view'>
            <div className="div1">
                <StickyBox offsetBottom={40} offsetTop={20} className='div2'>
                    <div className="div5"> 
                        {productImgs.map(()=>(
                            <div className='div7'></div>
                        ))}
                    </div>
                    <div className="div6">
                    </div>
                </StickyBox>
                <div className="div3">
                    <div className="div8">Nike Air Force 1'07</div>
                    <div className="div9">Men's shoes</div>
                    <div className="div10">$145</div>
                    <div className="div11">
                        {productColor.map((item, index)=>(
                            <div className="div12"></div>
                        ))}
                    </div>
                    <div className="div13">Select Size</div>
                    <div className="div14">
                        {shoeSizes.map((item, index)=>(
                            <div className='div15'>{item}</div>
                        ))}
                    </div>
                    {/* <div className="div16">Button</div> */}
                    <Button className='div16'>Add to Cart</Button>
                    <div className="div17"> View Product Detatails</div>
                    <div className="div18">
                        <div className="div19">Free Delivery and Returns</div> 
                        <ExpandMoreIcon className='div20'/>
                    </div>
                    <div className="div18">
                        <div className="div19">Reviews(2)</div> 
                        <ExpandMoreIcon className='div20'/>
                    </div>
                </div>
            </div>
            <div className="div4">
                <BottomSections/>
            </div>
        </div>
    )
}