
import { BsArrowUpRight } from "react-icons/bs";
import Tshirt from "../components/Tshirt";
import Testimonials from "../components/Testimonials";
// import CreateDonationForm from "../components/Forms/FinancialHelpForm";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Homepage() {

  return (
    <>
\

      {/* home page  */}
      <div id="home" className="px-12 pt-20 gap-44 items-center flex justify-center h-screen w-full bg-[url('./images/homebg.png')] home">
        <div className="pl-20 taglinediv">
          <h1 className="text-6xl tagline w-3/5 pr-20 text-[#24387a] font-semibold">
         <span className="kaarwaanbg"> Kaarwaa.N...</span><br />
A step for the welfare of another India.
          </h1>
          <p className="w-1/2 homepara mt-8 my-2">
            Karwaa.N.. an organisation aimed to raise the underprivileged.
            Here we help and uplift them by numerous ways like Cloth Donations,
            Preparing Children for JNV(Jawahar Navodaya Vidyalaya), Blood Donations,
            Hosting Nukkad Natak to raise awareness about many
            social issues and unnoticed taboos in our society.

          </p>
          <div className="h-auto flex justify-center gap-6 py-6 w-96 ">
            <Link to="/Donation">
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 py-1 rounded-full bg-[#24387a] hover:bg-white hover:text-[#24387a] duration-300 hover:border-2 hover:border-[#24387a]">
              Donate Now <BsArrowUpRight />
            </button>
            </Link>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 rounded-full border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              View Our Work
            </button>
          </div>
        </div>
        <div className="h-96 sideimg w-96 overflow-hidden border-8 border-black rounded-full">
        </div>
      </div>

      {/* about us page */}
      <div id="about" className="flex aboutdiv my-20 pt-20 flex-row">
        <div className="flex detailsdiv flex-col w-1/2">
          <div className="w-full py-4 p-12 pl-32 h-full flex items-start abouthread text-white flex-col bg-[#24387a]">
            <h1 className="py-3">About Us</h1>
            <h1 className="text-4xl font-semibold">
             A glimpse at Kaarwaa.N
            </h1>
          </div>
          <div className="w-full aboutdetails py-4 p-12 pl-32 h-full">
            <p>
            Kaarwaa.N is a social welfare association founded by the students of Jabalpur Engineering College (JEC), Jabalpur. We are dedicated to help poor, underprivileged, downtrodden sections of the society. The primary aim of Kaarwaa.N is to tutor students for the JNV (Jawahar Navodaya Vidhyalaya) Entrance Exam and encourage “girls’ education”.
            </p>
            <p>
            We organize innumerous activities to help the marginalized and create awareness about various social issues. Addressing issues from health and hygiene to education and environment, the members of Kaarwaa.N believe in working towards making this world a better place.
            </p>
          <Link to="/aboutus">
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 my-10 py-1 rounded-full bg-[#24387a]">
              Learn More <BsArrowUpRight />
            </button>
          </Link>
          </div>
        </div>
        <div className="aboutimage h-96 w-1/2">
          <div className="h-40 w-full imagebgdiv bg-[#24387a]"></div>
          <img
            className="-translate-y-16 image -translate-x-8"
            src="./images/aboutusimage.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center h-full text-white w-full px-32 py-12 bg-[#24387a] programbg">
        <h1 className="text-4xl text-center">Donate to empower the underprivileged and help them today!</h1>
        <p className="programdata text-center w-2/3 text-sm mt-6">
          With your help and donations Karwaa.N... can help the poor children
          and can have a better life than they are having right now.
          Even a small amount of donation is appreciated.
          Your evening snack may be their dinner or all they ate the whole day :)
        </p>
        <div className="w-2/3 programdata my-10 gap-4 flex-row flex justify-center ">
          <div className="w-full h-24  flex flex-col justify-center items-center sideborder">
            <h1 className="text-4xl">24</h1>
            <p className="text-sm">Aryan Tyagi</p>
          </div>

          <div className="w-full h-24  flex flex-col justify-center items-center sideborder">
            <h1 className="text-4xl">24</h1>
            <p className="text-sm">Aryan Tyagi</p>
          </div>

          <div className="w-full h-24  flex flex-col justify-center items-center sideborder">
            <h1 className="text-4xl">24</h1>
            <p className="text-sm">Aryan Tyagi</p>
          </div>

          <div className="w-full h-24  flex flex-col justify-center items-center">
            <h1 className="text-4xl">24</h1>
            <p className="text-sm">Aryan Tyagi</p>
          </div>
        </div>
      </div>

      <h1 id="ourwork" className="text-4xl pt-20 font-semibold my-12 mt-32 text-center text-[#24387a]">
        Various social welfare events <br />
        By Karwaa.N...
      </h1>
      <div className="w-full flex-wrap cards my-12 justify-center px-32 flex gap-12 h-full">
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgur.com/a/KjB6qAl"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Nukkad Natak:
            </h1>
            <p className="px-4 pb-2">
            Nukkad natak - A form of street theater performed by the members to create an awareness amongst people regarding various social issues. 
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgur.com/a/7I6ThmO"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Blood Donation:  
            </h1>
            <p className="px-4 pb-2">
            “A single drop of blood can make a huge difference.”  Every day thousands of lives are saved when someone donates blood. 
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgur.com/a/npZUA7A"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Plantation: 
            </h1>
            <p className="px-4 pb-2">
             In order to curb the consequences of deforestation, Kaarwaa.N conducts plantation drives wherein saplings are planted in different institutions.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgur.com/a/mUNeefe"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Clothes distribution: 
            </h1>
            <p className="px-4 pb-2">
           Kaarwaa.N frequently donates clothes to the less fortunate ones. The clothes are received from households and then distributed to the needy by volunteers.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgur.com/a/YEvt7CF"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Orphanage visits: 
            </h1>
            <p className="px-4 pb-2">
           The members of Kaarwaa.N occasionally visit the orphanage to spend time with the misfortunate ones/those robbed of parental love and guidance.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgur.com/a/WPk1C2z"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Exam Prepration:
            </h1>
            <p className="px-4 pb-2">
            Kaarwaa.N... aims to shine light in the dark corners of the underprivileged by educating them for these life changing exams. 
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div>
        <Tshirt />
      </div>

      <div>
       <Testimonials/>
      </div>
      <Footer/>
    </>
  );
}

export default Homepage;
