
import { ProductAgentForm } from './productAgentForm';
import { ProdOverView } from './productOverView';
export const ProductDesc = () => {
    return (
        <div className="productView-desc">
                <div className="productView-desc-side">
                    <ProdOverView/>
                </div>
                <div className="productView-desc-side">
                    <ProductAgentForm/>
                </div>
            </div>
    )
}