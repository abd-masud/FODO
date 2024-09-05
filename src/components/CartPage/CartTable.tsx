import Image from "next/image";
import product1 from "../../../public/img/product/1.png";
import product2 from "../../../public/img/product/2.png";
import product3 from "../../../public/img/product/3.png";
import { KeyboardEvent, useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

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

  const increment = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  //  useEffect(() => {
  //    // Fetch tax and discount data from the API
  //    const fetchTaxAndDiscount = async () => {
  //      try {
  //        const { data } = await axios.get("/api/checkout"); // Adjust the URL as needed
  //        setTax(data.tax);
  //        setDiscount(data.discount);
  //      } catch (error) {
  //        console.error("Error fetching tax and discount data", error);
  //      }
  //    };

  //    fetchTaxAndDiscount();
  //  }, []);

  const decrement = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleQuantityChange = (id: number, value: string) => {
    const quantity = parseInt(value);
    if (quantity >= 1) {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, quantity } : product
        )
      );
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    productId: number
  ) => {
    if (e.key === "ArrowUp") {
      increment(productId);
    } else if (e.key === "ArrowDown") {
      decrement(productId);
    }
  };

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

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
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
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                IMAGE
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                PRODUCT NAME
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                UNIT PRICE
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                QTY
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                SUBTOTAL
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr className="border border-[#DEE2E6]">
                <td colSpan={6} className="text-center py-5">
                  <p className="text-lg font-semibold">Please Add to Cart</p>
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td className="w-[120px] p-2 border border-[#DEE2E6]">
                    <Image
                      src={product.image}
                      height={330}
                      width={330}
                      alt={product.name}
                    />
                  </td>
                  <td className="border border-[#DEE2E6]">{product.name}</td>
                  <td className="border border-[#DEE2E6]">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="border border-[#DEE2E6]">
                    <div className="flex items-center w-[150px] justify-between border border-[#7BAE00] m-auto overflow-hidden">
                      <button
                        onClick={() => decrement(product.id)}
                        className="w-[40px] h-[40px] bg-[#7BAE00] text-white text-[26px] flex items-center justify-center"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                        className="w-[50px] text-center h-[40px] border-none outline-none focus:outline-none focus:ring-0"
                        inputMode="numeric"
                        onKeyDown={(e) => handleKeyDown(e, product.id)}
                        min="1"
                      />
                      <button
                        onClick={() => increment(product.id)}
                        className="w-[40px] h-[40px] bg-[#7BAE00] text-white text-[26px] flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="border border-[#DEE2E6]">
                    ${(product.price * product.quantity).toFixed(2)}
                  </td>
                  <td className="border border-[#DEE2E6]">
                    <button
                      className="group"
                      onClick={() => removeProduct(product.id)}
                    >
                      <FontAwesomeIcon
                        className="text-[25px] group-hover:text-[#7BAE00] transition duration-300"
                        icon={faXmark}
                      />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex justify-between my-5">
          <Link
            className="bg-[#7BAE00] text-white hover:bg-[#0B2B3C] transition duration-300 py-[15px] px-[30px]"
            href={"/Shop"}
          >
            CONTINUE SHOPPING
          </Link>
          <Link
            className="bg-[#7BAE00] text-white hover:bg-[#0B2B3C] transition duration-300 py-[15px] px-[30px]"
            href={"/Cart"}
          >
            UPDATE CART
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="border-x border-t border-[#DEE2E6] text-[#0B2B3C] font-bold px-5 py-3">
              Use Coupon Code
            </div>
            <div className=" border border-[#DEE2E6] px-5 py-3">
              <p>Have a Coupon Code?</p>
              <form action="">
                <input
                  className="block w-full mt-3 mb-5 border border-[#DEE2E6] hover:border-[#7BAE00] focus:ring-0 focus:border-[#7BAE00] text-[15px] py-[15px] px-[30px]"
                  type="text"
                  placeholder="xxxxx"
                />
                <button className="bg-[#7BAE00] hover:bg-[#0B2B3C] transition duration-300 py-[15px] px-[30px] text-white">
                  APPLY
                </button>
              </form>
            </div>
          </div>
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
