import Image from "next/image";
import Link from "next/link";
export default function SignUP() {
    return (
        <div>
            <div>
               

                {/* white work */}
             
                <div className="w-[1440px] h-[900px] top-[100px] gap-[129px]  bg-yellow-100 flex">
                    <div className="w-[853px] h-[1000px] topright-4 bottomright-4 ">
                        <div className="w-[853px] h-[1000px] top-[75px] left-[-8px]">
                            <Image className="pt-[14px] pl-[9px] " src={"/h-1.png"} alt="" width={1720} height={1520} />
                        </div>


                        {/* login */}
                    </div>
                    <div className="w-[371px] h-[530px] gap-[48px]">
                        <div className="w-[339px] h-[78px] gap-[24px]">


                            <div className="w-[339px] h-[30px] ">

                                <p className="font-[500px] font-inter text-[36px] text-black tracking-[%4] leading-[30px]">Rocket single seater</p>

                            </div>
                            <div className="w-[191px] h-[24px] ">
                                <p className="font-[400px] font-poppins text-[16px] text-black  leading-[24px] mt-[30px]"></p></div>

                        </div>
                        <div className="w-[371px]  h-[404px] gap-[40px] mt-[40px]">
                            {/* name */}
                            <div className="w-[370px] h-[176px] gap-[40px]">
                                <div className="w-[370px] h-[32px] gap-[8px] ">
                                    <div className="w-[49px] h-[24px] mt-[30px] ">
                                        <form>
                                            {/* <p>Name</p> */}
                                            <input type="text" placeholder="Shop Now" />
                                        </form>
                                    </div>
                                    {/* email */}
                                    <div className="w-[370px] h-[32px] 
          gap-[8px]">
                                        <div className="w-[49px] h-[24px] mt-[30px] ">
                                            <form>
                                                {/* <p>Email or Phone Number</p> */}
                                                <input type="text" placeholder="" /> <br />
                                            </form>
                                        </div>
                                        {/* pssword */}
                                        <div className="w-[370px] h-[32px] 
          gap-[8px]">
                                            <div className="w-[77px] h-[24px] mt-[30px] ">
                                                <form>
                                                    {/* <p>Password</p> */}
                                                    <input type="text" placeholder="" />
                                                </form>
                                            </div>




                                        </div>


                                    </div>

                                </div>
                            </div>
                            <div className="w-[371px]  h-[188px] gap-[16px]">
                                <div className="h-[56px] gap-[16px] rounded-[4px] pt-[16px] pr-[122px] pb-[16px] pl-[122px]   text-black ">
                                    <button className="w-[127px] h-[24px] pt-[] pr-[] pb-[] pl-[] font-medium "></button>


                                </div>


                            </div>
                            <div className="w-[371px] h-[56px] rounded-[4px] border-spacing-1 pt-[16px] pr-[88px] pb-[16px] pl-[88px] gab-[10px] ">
                                <div className="w-[199px] h-[24] gap-[16px] flex">
                                 
                                    <p className="w-[159px] h-[24px] leading-[24px] text-[16px]"></p>


                                </div>
                                <div className="w-[248px] h-[28px] gap-[16px] flex">
                                    <div className="w-[185px] h-[24px] "><p className="leading-[24px] text-[16px]"></p></div>
                                    <div className="w-[47px] h-[28px] gap-[4px]"> <p className="h-[24px] leading-[24px] text-[16px]">
                                    <Link href="/Signup "></Link>
                                    </p></div>
                                </div>
                            </div>








                        </div>




                    </div>


                </div>

                
                




            </div>


        </div>


    )
}
