import { formatEther } from "ethers";
import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const ContractData = () => {
  const { address } = useAccount();

  const { data: totaldripped } = useScaffoldContractRead({
    contractName: "BopFaucetContract2",
    functionName: "Total_Dripped",
  });

  const { data: totalDripPool } = useScaffoldContractRead({
    contractName: "BopFaucetContract2",
    functionName: "Total_Drip_Pool",
  });

  return (
    <>
      <div className="flex flex-col justify-bottom items-center bg-[url('/assets/faucet_2.jpg')] bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
        <div className="flex justify-bottom w-full">
          <div className="bg-accent border border-primary rounded-xl flex">
            <div className="p-2 py-1 border-r border-primary flex items-end">Total Dripped</div>
            <div className="text-4xl text-right min-w-[3rem] px-2 py-1 flex justify-end font-bai-jamjuree">
              {parseFloat(formatEther(totaldripped || "0")).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="bg-accent border border-primary rounded-xl flex">
          <div className="p-2 py-1 border-r border-primary flex items-end">Total Drip Pool</div>
          <div className="text-4xl text-right min-w-[3rem] px-2 py-1 flex justify-end font-bai-jamjuree">
            {parseFloat(formatEther(totalDripPool || "0")).toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
};
