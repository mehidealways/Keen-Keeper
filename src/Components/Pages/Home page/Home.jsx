import { GoPlus } from 'react-icons/go';

const Home = () => {
  return (
    <section className="container mx-auto">
      <div className="text-center flex justify-center flex-col">
        <h1 className=" text-6xl font-bold text-[#1f2937] mt-12">
          Friends to keep close in your life
        </h1>
        <p className=" text-lg mt-7 text-gray-400">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="flex justify-center mt-5">
          <button className="flex items-center gap-1 bg-[#244d3f] p-2 text-white font-semibold rounded-sm cursor-pointer">
            <GoPlus />
            Add Friend
          </button>
        </div>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-center">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-[#1f2937]">10</h2>
          <p className="text-gray-400">Total Friends</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-[#1f2937]">3</h2>
          <p className="text-gray-400">On Track</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-[#1f2937]">1</h2>
          <p className="text-gray-400">Need Attention</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-[#1f2937]">6</h2>
          <p className="text-gray-400">Interactions This Month</p>
        </div>
      </div>
      {/* main Friends CardsSection */}
      <main>
        
      </main>
    </section>
  );
};

export default Home;
