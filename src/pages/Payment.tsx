import MovieCheckout from "../components/MovieCheckoutCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useReadContract } from "wagmi";
import { contractAddress , ABI } from "@/utils/contractDetails";

const Payment = () => {

  // const dummyVid = {
  //   name: "John Wick",
  //   description: "John Wick, a retired legendary hitman seeking vengeance after a group of Russian gangsters, led by Iosef Tarasov, steal his car and kill his beloved dog, a final gift from his late wife. This act reignites Wick\'s past and sets him on a relentless, high-octane mission against the criminal underworld that once feared him.",
  //   thumbnail: johnWickImg,
  //   price: 250,
  //   coin: 'GAS',
  //   owner: "John Doe",
  //   video: "",
  //   trailer: ""
  // }

  const {data , isPending} = useReadContract({
    abi : ABI,
    address : contractAddress,
    functionName : "getAllPoster",
    args : []
  })

  console.log(data)

  if(isPending){
    return <div>loading...</div>
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className=" relative w-full flex">
        <img src={`https://maroon-fashionable-warbler-188.mypinata.cloud/ipfs/${data[0].ipfsHash}?pinataGatewayToken=gVQfpvbN3IXW52kARQuLO50y78ginsP31oSkPQT78K23fingxRmnt7u0tHk2lnFk`} className="w-full blur-3xl h-[80vh]"/>
        <div className="absolute h-[80vh] w-full flex">
          <div className="w-3/5 h-full flex justify-center items-center">
            <img src={`https://maroon-fashionable-warbler-188.mypinata.cloud/ipfs/${data[0].ipfsHash}?pinataGatewayToken=gVQfpvbN3IXW52kARQuLO50y78ginsP31oSkPQT78K23fingxRmnt7u0tHk2lnFk`} alt="" className="object-cover rounded-xl h-full w-11/12 m-auto" />
          </div>
          <div className="w-2/5 flex justify-center items-center h-full">
            <div className="h-full flex items-center justify-center">
              <MovieCheckout
                title={data[0].name}
                gas={parseInt(data[0].price)}
                owner="0x567a927827f8b8fd47513e31a54820d56bcd"
                description={data[0].description}
                buyers={1230000}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Payment;
