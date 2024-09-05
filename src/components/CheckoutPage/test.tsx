import { SetStateAction, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const CheckoutForms = () => {
  const router = useRouter();
  const [grandTotal, setGrandTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [payableTotal, setPayableTotal] = useState(0);

  useEffect(() => {
    if (router.query.grandTotal) {
      setGrandTotal(Number(router.query.grandTotal));
    }
  }, [router.query.grandTotal]);

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const shippingResponse = await fetch("/api/shipping");
        const couponResponse = await fetch("/api/coupon");

        const shippingData = await shippingResponse.json();
        const couponData = await couponResponse.json();

        setShipping(shippingData.amount);
        setCoupon(couponData.discount);
      } catch (error) {
        console.error("Failed to fetch shipping or coupon data", error);
      }
    };

    fetchCosts();
  }, []);

  useEffect(() => {
    const total = grandTotal + shipping - coupon;
    setPayableTotal(total);
  }, [grandTotal, shipping, coupon]);

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <main className="bg-[#F2F3F9]">
      <form action="">
        <div className="grid grid-cols-3 max-w-screen-xl m-auto gap-6 py-24">
          <div className="col-span-2 bg-white shadow-md border p-5">
            <h2 className="text-[22px] font-bold text-[#0B2B3C] mb-5">
              Billing Details
            </h2>
            <hr />

            <div className="grid grid-cols-2 gap-5">
              <div className="mt-5">
                <label className="text-[15px] text-[#333333]" htmlFor="first">
                  First Name *
                </label>
                <input
                  className="block border-[#E1DCDC] outline-none focus:ring-0 focus:border-[#7BAE00] transition duration-300 w-full text-[15px] py-[12px] px-[15px]"
                  id="first"
                  type="text"
                  required
                />
              </div>
              <div className="mt-5">
                <label className="text-[15px] text-[#333333]" htmlFor="last">
                  Last Name *
                </label>
                <input
                  className="block border-[#E1DCDC] outline-none focus:ring-0 focus:border-[#7BAE00] transition duration-300 w-full text-[15px] py-[12px] px-[15px]"
                  id="last"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-[15px] text-[#333333]" htmlFor="company">
                Company Name (Optional)
              </label>
              <input
                className="block border-[#E1DCDC] outline-none focus:ring-0 focus:border-[#7BAE00] transition duration-300 w-full text-[15px] py-[12px] px-[15px]"
                id="company"
                type="text"
              />
            </div>
            <div className="mt-5">
              <label className="text-[15px] text-[#333333]" htmlFor="email">
                Email *
              </label>
              <input
                className="block border-[#E1DCDC] outline-none focus:ring-0 focus:border-[#7BAE00] transition duration-300 w-full text-[15px] py-[12px] px-[15px]"
                id="email"
                type="email"
                required
              />
            </div>
            <div className="mt-5">
              <label className="text-[15px] text-[#333333]" htmlFor="phone">
                Phone *
              </label>
              <input
                className="block border-[#E1DCDC] outline-none focus:ring-0 focus:border-[#7BAE00] transition duration-300 w-full text-[15px] py-[12px] px-[15px]"
                id="phone"
                type="number"
                inputMode="numeric"
                min="0"
                required
              />
            </div>
            <div className="mt-5">
              <label className="text-[15px] text-[#333333]" htmlFor="country">
                Country *
              </label>
              <select
                className="block border-[#E1DCDC] outline-none focus:ring-0 focus:border-[#7BAE00] transition duration-300 w-full text-[15px] py-[12px] px-[15px]"
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                required
              >
                <option className="font-bold" value="">
                  Select a country
                </option>
                <option value="usa">United States</option>
                <option value="can">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="bd">Bangladesh</option>
                <option value="aus">Australia</option>
                <option value="arg">Argentina</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="text-[15px] text-[#333333]" htmlFor="zip">
                Zip *
              </label>
              <input
                className="block border-[#E1DCDC] outline-none focus:ring-0 focus:border-[#7BAE00] transition duration-300 w-full text-[15px] py-[12px] px-[15px]"
                id="zip"
                type="text"
                required
              />
            </div>
            <div className="mt-5">
              <input
                className="border-[#E1DCDC] outline-none focus:ring-0 transition duration-300"
                id="ship"
                type="checkbox"
                value={"dif-address"}
              />
              <label className="text-[15px] text-[#333333] ml-3" htmlFor="ship">
                Ship to a different address?
              </label>
            </div>
            <div className="my-5">
              <label className="text-[15px] text-[#333333]" htmlFor="notes">
                Order Notes (Optional)
              </label>
              <textarea
                className="block border-[#E1DCDC] outline-none focus:ring-0 focus:border-[#7BAE00] transition duration-300 w-full text-[15px] py-[12px] px-[15px]"
                id="notes"
              ></textarea>
            </div>
          </div>
          <div>
            <div className="bg-white border shadow-lg p-5 mb-6">
              <h2 className="text-[22px] font-bold text-[#0B2B3C] mb-5">
                Checkout Summary
              </h2>
              <hr />
              <div className="divide-y divide-dashed">
                <div className="flex justify-between">
                  <span className="text-[#333333] my-3">Grand Total</span>
                  <span className="text-[#333333] my-3">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333333] my-3">Shipping</span>
                  <span className="text-[#333333] my-3">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333333] my-3">Coupon</span>
                  <span className="text-[#333333] my-3">
                    ${coupon.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666] font-[900] my-3">
                    Payable Total
                  </span>
                  <span className="text-[#666666] font-[900] my-3">
                    ${payableTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white border shadow-lg p-5">
              <h2 className="text-[22px] font-bold text-[#0B2B3C] mb-5">
                Payment Method
              </h2>
              <hr />
              <div>
                <div className="mb-4 mt-6">
                  <input id="bank" value={"bank"} type="checkbox" />
                  <label className="text-[##191919] ml-3" htmlFor="bank">
                    Direct bank transfer
                  </label>
                </div>
                <div className="mb-4">
                  <input id="cash" value={"cash"} type="checkbox" />
                  <label className="text-[##191919] ml-3" htmlFor="cash">
                    Cash on delivery
                  </label>
                </div>
                <div className="mb-4">
                  <input id="check" value={"check"} type="checkbox" />
                  <label className="text-[##191919] ml-3" htmlFor="check">
                    Check payments
                  </label>
                </div>
                <div className="mb-4">
                  <input id="paypal" value={"paypal"} type="checkbox" />
                  <label className="text-[##191919] ml-3" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <input
                type="submit"
                className="text-white text-[15px] bg-[#7BAE00] hover:bg-[#0B2B3C] transition duration-300 py-[15px] px-[30px] mt-4"
              >
                PLACE ORDER
              </input>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};
