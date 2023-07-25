export const ProductOptionCheckBox = ({text}) => {
    return (
            <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    {text}
                </label>
            </div>
    )
}