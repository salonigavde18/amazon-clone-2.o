import Image from "next/image";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

function checkout() {
  const items = useSelector(selectItems);
  const total=useSelector(selectTotal);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm  ">
          <Image
            src="https://socientifica.com.br/wp-content/uploads/2024/07/amazon-prime-day-860x484.jpg"
            width={1050}
            height={350}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon basket is empty."
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md min-w-[400px]">
          {items.length > 0 && (
            <div className="flex flex-col bg-white p-10 shadow-md">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>
              <button
                // role="link" for stripe!
                // role="link"
                // onClick={() =>
                //   session &&
                //   !session.activeSubscription &&
                //   createCheckoutSession()
                // }
                 disabled={!session}
                 className={`button mt-2 ${
                   !session &&
                   "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                 }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;