import appImage from "../assets/appDownload.png";
import landingImage from "../assets/landing.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8  flex flex-col   gap-5  text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a Click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img className="rounded-lg" src={landingImage} />
        <div className="gap-4 flex flex-col items-center justify-center text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Orders At Ease
          </span>
          <span>
            Download the EatAtEase for faster and awesome experience!!!
          </span>
          <span>
            <img src={appImage} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
