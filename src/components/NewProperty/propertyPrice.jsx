export const PropertyPrice = () => {
    return (
        <section class="card card-body border-0 shadow-sm p-4 mb-4 add-prp-sec" id="price">
            <h2 class="h4 mb-4"><i class="fi-cash text-primary fs-5 mt-n1 me-2"></i>Price</h2>
            <label class="form-label" for="ap-price">Price <span class="text-danger">*</span></label>
            <div class="d-sm-flex">
            <select class="form-select w-25 me-2 mb-2">
                <option value="usd">$</option>
                <option value="eur">€</option>
                <option value="gbp">£</option>
                <option value="jpy">¥</option>
            </select>
            <input class="form-control w-100 me-2 mb-2" type="number" id="ap-price" min="200" step="50" required="" />
            <select class="form-select w-50 mb-2">
                <option value="day">per day</option>
                <option value="week">per week</option>
                <option value="month" selected="">per month</option>
                <option value="year">per year</option>
            </select>
            </div>
        </section>
    )
}