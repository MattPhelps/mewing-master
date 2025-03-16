import ReviewBox from "./ReviewBox";

export default function Hero() {
    return (
      <div className="hero min-h-screen lg:-mt-28 flex items-center justify-center">
        <div className="hero-content text-center">
          
          <div className="max-w-2xl"> 
          <ReviewBox />
          <h1 className="text-4xl lg:text-5xl font-bold mt-8">
            Become a Mewing Master <i>Guaranteed</i>
          </h1>
            <p className="py-6 text-lg mt-6">
            Learn mewing techniques in detail. Know if you're doing it correctly. Become a pro at the single greatest ROI activity for improving your facial appearance.
            </p>
            <a href="https://buy.stripe.com/4gw4hy3Qyfst3LydQQ">
              <button className="btn btn-primary btn-lg text-white mt-6">Buy Mewing Mastery<span className="text-lg">→</span></button>
            </a>
            <p className="text-sm text-center text-gray-500 mt-8">
                🔒 Pay once. No subscription.
                </p>
          </div>
        </div>
      </div>
    );
  }
  