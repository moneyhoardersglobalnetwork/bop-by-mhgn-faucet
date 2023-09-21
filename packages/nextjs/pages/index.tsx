import Link from "next/link";
import type { NextPage } from "next";
import { SparklesIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex bg-[url('/assets/faucet_2.jpg')]  items-center  flex-grow bg-no-repeat pt-10">
        <div className="px-5">
          <h1 className="text-white text-center mb-8">
            <span className="flex-grid bg-black text-2xl mb-2">Welcome to the</span>
            <div></div>
            <span className="flex-grid bg-black text-4xl font-bold">BOP FAUCET</span>
          </h1>
          <p className="text-center bg-black text-white text-lg">
            Any Ethereum address with a zero balance of BOP tokens can make the faucet Drip a max of 6000 BOP for each
            wallet
          </p>
        </div>

        <div className="flex-grow bg-black w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <WrenchScrewdriverIcon className="h-8 w-8 fill-secondary" />
              <p>
                Fully interact with the faucet contract and BOP token contract.{" "}
                <Link href="/debug" passHref className="link">
                  Full Interaction
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Click here{" "}
                <div>
                  <Link href="/faucet-ui" passHref className="link">
                    Drip The Faucet
                  </Link>{" "}
                </div>
                to access the Faucet UI.
              </p>
            </div>
          </div>
          The M.H.G.N
        </div>
      </div>
    </>
  );
};

export default Home;
