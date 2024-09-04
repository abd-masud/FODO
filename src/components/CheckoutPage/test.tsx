export const CheckoutForms = () => {
  return (
    <main className="bg-[#F2F3F9]">
      <form action="">
        <div className="grid grid-cols-3 max-w-screen-xl m-auto gap-6 py-24">
          <div>
            <div className="bg-white border shadow-lg p-5 mb-6">
              <h2 className="text-[22px] font-bold text-[#0B2B3C] mb-5">
                Checkout Summary
              </h2>
              <hr />
              <div className="divide-y divide-dashed">
                <div className="flex justify-between">
                  <span className="text-[#333333] my-3">Grand Total</span>
                  <span className="text-[#333333] my-3">$260.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333333] my-3">Shipping</span>
                  <span className="text-[#333333] my-3">$260.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333333] my-3">Coupon</span>
                  <span className="text-[#333333] my-3">$260.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666] font-[900] my-3">
                    Payable Total
                  </span>
                  <span className="text-[#666666] font-[900] my-3">
                    $260.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};
