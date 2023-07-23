import calc from '../../imgs/calculator.png'
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';

export const PropertyCost = () => {
    return (
        <div className="property-cost">
            <div className="property-cost-section">
                <img src={calc} alt="calc"/>
            </div>
            <div className="property-cost-section">
                <h1>Calculate the cost of your property</h1>
                <div>
                    Real estate appraisal is a procedure that allows your
                    to determine the avarage market value of real estate
                    (apartment, house, land, etc.).<br/>
                    Calculate the cost of your property with our new Calculation Service.
                </div>
                <Button variant="outlined" startIcon={<CalculateIcon />}>
                    Calculate
                </Button>
            </div>
        </div>
    )
}