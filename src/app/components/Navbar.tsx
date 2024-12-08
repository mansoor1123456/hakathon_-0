//import Image from "next/image"
import Link from "next/link"
export default function Navbar(){
    return(
        <div>
            <div className="w-[1440px] h-[48px] bg-yellow-100 flex">
        <div className="w-[px] h-[44px] text-[#ffffff] text-[14px] flex mt-[12px] relative pl-[445px]  ">
          <div className="w-[550px] h-[24px] flex">
            <p className="w-[474px] leading-[24px] text-[14px] ">
              
            </p>
            <p className="font-semibold"></p>
          </div>
          <div className="relative left-[231px] flex">
            <p></p>
           {/* <Image src={"/DropDown.png"} alt="" width={24} height={24} /> */}
          </div>
        </div>
      </div>

      {/* white work */}
      <div className="w-[1170px] h-[38px] mt-10 relative left-[135px] flex">
        <div className="w-[674px] h-[24px] gap-[190px] flex ">
          <p className="w-[118px] h-[24px] font-bold text-[24px] leading-[24px] flex">
            
          </p>

          
          <div className="w-[367px] h-[24px] gap-[48px] justify-between ">
            <Link className="ml-[23px]"  href="/">Home</Link>
            <Link className="ml-[23px]"  href="/Contact">Contact</Link>
            <Link className="ml-[23px]"  href="/About">About</Link>
            <Link className="ml-[23px]"  href="/Signup">Signup</Link>
          </div>
        </div>
      </div>
        </div>
    )
}