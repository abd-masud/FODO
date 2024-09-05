import Image from "next/image";
import product1 from "../../../public/img/product/1.png";
import product2 from "../../../public/img/product/2.png";
import product3 from "../../../public/img/product/3.png";
import { KeyboardEvent, useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

export const CartTable = () => {
  const router = useRouter();
  const initialProducts = [
    {
      id: 1,
      name: "Avocado",
      price: 260.0,
      vat: 26.0,
      image: product1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Lettuce",
      price: 260.0,
      vat: 26.0,
      image: product2,
      quantity: 1,
    },
    {
      id: 3,
      name: "Egg",
      price: 260.0,
      vat: 26.0,
      image: product3,
      quantity: 1,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);

  const getSubtotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const getVat = () => {
    return products.reduce(
      (total, product) => total + product.vat * product.quantity,
      0
    );
  };

  const getGrandTotal = (
    subtotal: number,
    vat: number,
    tax: number,
    discount: number
  ) => {
    return subtotal + vat + tax - discount;
  };

  const subtotal = getSubtotal();
  const vat = getVat();
  const grandTotal = getGrandTotal(subtotal, vat, tax, discount);

  const handleProceedToCheckout = () => {
    router.push(`/Checkout?grandTotal=${grandTotal}`);
  };

  return (
    <main className="bg-[#F2F3F9]">
      <div className="max-w-screen-xl m-auto overflow-x-scroll lg:overflow-x-hidden py-20">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="border-x border-t bg-[#EAEBF1] border-[#DEE2E6] text-[#0B2B3C] font-bold px-5 py-3">
              Order Total
            </div>
            <div className="border border-[#DEE2E6] px-5 py-3">
              <div className="flex justify-between mb-1">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Vats</span>
                <span>${vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Taxes</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Discounts</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <hr className="bg-[#DEE2E6] my-1" />
              <div className="flex justify-between">
                <span>Grand Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
              <button
                onClick={handleProceedToCheckout}
                className="text-white bg-[#7BAE00] hover:bg-[#0B2B3C] py-[15px] px-[30px] transition duration-300 mt-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
