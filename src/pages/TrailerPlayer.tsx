import Video from "../components/Video";
import Navbar from "../components/Navbar";
import MovieInfo from "../components/MovieInfo";
import johnWickImg from '../assets/johnWick.jpg'
import { video, videos } from "@/DummyData/videosData";
import MovieCard from "@/components/MovieCard";


const TrailerPlayer = () => {

  // const connectedAccount = useAccount()

  //write a funtion to fetch the video details

  //also to fetch other videos available to rent

  const dummyVid = {
    name: "John Wick",
    description: "John Wick, a retired legendary hitman seeking vengeance after a group of Russian gangsters, led by Iosef Tarasov, steal his car and kill his beloved dog, a final gift from his late wife. This act reignites Wick\'s past and sets him on a relentless, high-octane mission against the criminal underworld that once feared him.",
    thumbnail: johnWickImg,
    price: 250,
    coin: 'GAS',
    owner: "John Doe",
    video: "",
    trailer: ""
  }

  return (
    <div className="w-full h-full pb-10">
      <Navbar />
      <div className="flex flex-col gap-y-12 justify-center items-center">
        <div className="flex flex-col w-full relative items-center bg-[#292929] h-[140vh]">
          <img src={dummyVid.thumbnail} className="w-full absolute blur-3xl h-[90vh]"/>
          <div className="flex pt-10 gap-y-6 flex-col absolute top-0 w-full justify-center items-center">
            <div className="flex gap-x-2 text-white justify-center items-center">
              <span className="font-hanalei text-4xl">{dummyVid.name}</span>
              <span className="font-hanalei text-4xl text-[#1EFF00]">Trailer</span>
              <div className="border border-[#1EFF00] rounded-full px-3 py-1">
                <span className="font-hanalei text-xl">Owner:</span>
                <span className="font-hanalei text-xl">0x567A027B2f96bbf8D47c133e13A54862D565bcd6</span>
              </div>
            </div>
            <Video />
            <div className="w-full justify-center items-center flex bottom-[0] font-hanalei">
              <MovieInfo
                title={dummyVid.name}
                owner="0x567a027b2f96b8fbd47c133e13a5482d565b6dc6"
                amount={dummyVid.price.toString()}
                imdbRating="8.8/10"
                description={dummyVid.description}
                posterUrl={dummyVid.thumbnail}
              />
            </div>
          </div>
        </div>
        <div className="px-10 w-10/12 max-w-[1600px] flex flex-col gap-y-2">
          <div className="flex justify-between text-xl">
            <h2 className="font-hanalei text-3xl text-[#1EFF00]">Movies to Rent</h2>
          </div>
          <div className="flex w-full gap-5">
            {
              videos.slice(0,5).map((video:video | any, index)  => {
                  return (
                      <MovieCard key={index} video={video}/>
                  )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerPlayer;