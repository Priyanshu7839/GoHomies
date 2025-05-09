import React from 'react'
import AdvertisementDefaultImg from '../../../assets/AdvertisementDefaultImg';
const PostFeedRight = () => {
  return (
    <>
      {/* {forumDetail?.group_prmotion_image == null ? ( */}
        <div className="bg-white p-[24px] relative rounded-2xl flex flex-col gap-7 border border-[#d7d7d8] poppins">
          <div className="flex justify-center items-center gap-[32px] ">
            <div>
                <AdvertisementDefaultImg height="148" width="157" />
            </div>
            <div className={`font-medium text-base leading-[24px] max-w-[105px]  text-[#16171C]  `}>Interested to promote your brand with us ?</div>
          </div>
          <a href="/support_page">
            <a
            /*  onClick={() => {
              setContactUsModal(true);
            }} */
            >
              <div className="font-display font-medium text-sm rounded-xl py-[12px] px-[32px]  bg-[#6B8E23] text-[#FFFFFF] border border-[#6B8E23] w-full text-center cursor-pointer">

                Contact us


              </div>
            </a>
          </a>
        </div>
      
    </>
  );
}

export default PostFeedRight