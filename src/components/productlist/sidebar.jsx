import CottageIcon from '@mui/icons-material/Cottage';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { ProductLabels, ProductOptionCheckBox } from './productLabels';


export const ProductSideBar = () => {
    const [age, setAge] = useState(''); 
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return (
        <div className="product-list-sidebar">
            <div className="sidebar-section">
                <div className='sidebar-section-a sidebar-section-active'>
                    <HomeWorkIcon fontSize='small'/>
                    <div>For rent</div>
                </div>
                <div className='sidebar-section-a'>
                    <CottageIcon fontSize='small'/>
                    <div>For sale</div>
                </div>
            </div>
            <div className="sidebar-section">
                <h2>Location</h2>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select City</option>
                    <option value="1">New York</option>
                    <option value="2">San Diego</option>
                    <option value="3">Chicago</option>
                    <option value="4">Dallas</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Choose District</option>
                    <option value="1">Brooklyn</option>
                    <option value="2">Manhattan</option>
                    <option value="3">Staten Island</option>
                    <option value="4">Queens</option>
                </select>
            </div>
            <div className="sidebar-section">
                <h2>Property type</h2>
                <ProductOptionCheckBox text={'Home'}/>
                <ProductOptionCheckBox text={'Apartment'}/>
                <ProductOptionCheckBox text={'Room'}/>
                <ProductOptionCheckBox text={'Office'}/>
                <ProductOptionCheckBox text={'Commercial'}/>
                <ProductOptionCheckBox text={'Land'}/>
            </div>
            <div className="sidebar-section">
                <h2>Property Price</h2>
                <div>
                    $ 
                    <input type="number" placeholder='min' />
                    <span></span>
                    $<input type="number" placeholder='max' />
                </div>
            </div>
        </div>
    )
}