import {
  FacebookFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  GooglePlusCircleFilled,
  HomeFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";

function LayoutFooter() {
  return (
    <div className="ml-[120px] py-12 mr-[12%] grid grid-cols-4 gap-8">
      <div>
        <div className="text-xl font-medium text-[#fecaca]">Contact</div>
        <div className="text-xl">
          <div className="flex pb-3 pt-6 text-[#fecaca] ">
            <HomeFilled />
            <p className="m-0 pl-2 text-base text-white">
              224 đường bưởi, Ba Đình, Hà Nội
            </p>
          </div>
          <div className="flex pb-3 text-[#fecaca]">
            <MailFilled />
            <p className="m-0 pl-2 text-base text-white">Truong@gmail.com</p>
          </div>
          <div className="flex pb-3 text-[#fecaca]">
            <PhoneFilled />
            <p className="m-0 pl-2 text-base text-white">094484948</p>
          </div>
        </div>
      </div>

      <div>
        <div className="text-xl font-medium text-[#fecaca]">Support</div>
        <div className="pt-5 text-base text-white">
          <p className="cursor-pointer hover:text-[#fecaca]">
            Hướng dẫn dùng website
          </p>
          <p className="cursor-pointer hover:text-[#fecaca]">
            Hướng dẫn xem phim trực tiếp
          </p>
          <p className="cursor-pointer hover:text-[#fecaca]">
            Hướng dẫn đăng ký
          </p>
        </div>
      </div>
      <div>
        <div className="text-xl font-medium text-[#fecaca]">Infomation</div>
        <div className="pt-5 text-white text-base">
          Nói không với giật lag, quảng cáo...
        </div>
      </div>
      <div>
        <div className="text-xl font-medium text-[#fecaca]">Follow Me</div>
        <div className="text-3xl pt-5 text-[#00ffff] flex">
          <div className="">
            <FacebookFilled />
          </div>
          <div className="pl-3">
            <TwitterCircleFilled />
          </div>
          <div className="pl-3">
            <YoutubeFilled />
          </div>
          <div className="pl-3">
            <GooglePlusCircleFilled />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LayoutFooter;
