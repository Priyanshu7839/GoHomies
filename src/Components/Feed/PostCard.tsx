import React from 'react'

const PostCard = ( props) => {
  return (
    <div className={`max-w-[616px] sm:w-[616px] flex-shrink gap-[16px] rounded-3xl bg-white flex flex-col border border-[#d7d7d8] h-full max-h-fit pt-[16px]  `}>
    <div className='px-[24px] flex  items-center'>
      <div className="pl-2 lg:pl-0 rounded-[20px] shrink-0">
       {props?.user?.profilePic &&
        <img className='rounded-[50px]' width={50} height={50} src={props.user.profilePic}/>}
      </div>
      <div className='w-10/12 lg:w-full gap-[1px] lg:grow pl-2 lg:pl-4 min-h-16 lg:flex flex-col hidden'>
        <p className='text-[16px] font-bold text-tertiary-750'>{props.user.name}</p>
        {props?.user?.title &&
          <p className='lg:text-sm text-[11px] text-tertiary-900 w-full lg:block hidden'>{props.user.title}</p>}
      { props?.user?.designation &&
        <p className="lg:text-xs flex items-center gap-[8px] text-[11px] w-full text-tertiary-950 truncate  "><a className="hover:text-tertiaryBlue-600 font-normal text-tertiary-950 " href="/forum/accounting">{props.user.designation}<span>&nbsp;</span></a><div><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01342 4.5C1.40492 4.5 0.912752 4.31081 0.536913 3.93243C0.178971 3.55405 0 3.06757 0 2.47297C0 1.8964 0.178971 1.42793 0.536913 1.06757C0.912752 0.689189 1.40492 0.5 2.01342 0.5C2.63982 0.5 3.12304 0.689189 3.46309 1.06757C3.82103 1.42793 4 1.8964 4 2.47297C4 3.06757 3.82103 3.55405 3.46309 3.93243C3.12304 4.31081 2.63982 4.5 2.01342 4.5Z" fill="#57585C" ></path></svg>
        </div>
        {/* {props.user.time} */}
        </p>}
      </div>
      <div className="flex justify-center"><div className="relative"><button className="hover:bg-[#d7d7d8] cursor-pointer rounded-md lg:py-1" aria-label="Options menu" id="headlessui-menu-button-46" type="button" aria-haspopup="true" aria-expanded="false"><div><svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0002 11.9166C11.5064 11.9166 11.9168 11.5062 11.9168 10.9999C11.9168 10.4937 11.5064 10.0833 11.0002 10.0833C10.4939 10.0833 10.0835 10.4937 10.0835 10.9999C10.0835 11.5062 10.4939 11.9166 11.0002 11.9166Z" stroke="#5F5F5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path><path d="M11.0002 5.50008C11.5064 5.50008 11.9168 5.08968 11.9168 4.58341C11.9168 4.07715 11.5064 3.66675 11.0002 3.66675C10.4939 3.66675 10.0835 4.07715 10.0835 4.58341C10.0835 5.08968 10.4939 5.50008 11.0002 5.50008Z" stroke="#5F5F5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.0002 18.3333C11.5064 18.3333 11.9168 17.9229 11.9168 17.4167C11.9168 16.9104 11.5064 16.5 11.0002 16.5C10.4939 16.5 10.0835 16.9104 10.0835 17.4167C10.0835 17.9229 10.4939 18.3333 11.0002 18.3333Z" stroke="#5F5F5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path></svg></div></button></div></div>
    </div>
    <div className='px-8 flex flex-col gap-[10px]'>
    {props.desc}
   <h1> {props.budget}</h1>
   <h1> {props.TravelMonth}</h1>
    <h1>{props.destination}</h1>
   <h1> {props.totalPersons}</h1>
    </div>
    <div>
      <div className='flex justify-between border-t border-b border-[#d7d7d8]'>
        <div className='px-6 py-3 flex items-center gap-3'>
          <p className='flex gap-2 items-center justify-center'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect width="16" height="16" rx="4" fill="#1660CD" ></rect><path fillRule="evenodd" clipRule="evenodd" d="M2 14V2H14V14H2Z" fill="#1660CD" ></path><path d="M6.19531 6.16535C6.19531 5.96535 6.25531 5.77035 6.36531 5.60535L7.68031 2.885C7.89531 2.56 8.43031 2.33 8.88531 2.5C9.37531 2.665 9.70031 3.215 9.59531 3.705C9.59531 3.705 9.07 5.38035 9.05 5.53035C9.03 5.68035 9.07 5.81535 9.155 5.92035C9.24 6.01535 9.365 6.07535 9.5 6.07535H11.8903C12.2853 6.07535 12.6253 6.23535 12.8253 6.51535C13.0153 6.78535 13.0503 7.13535 12.9253 7.49035L12 11.2454C11.845 11.8654 11.17 12.3704 10.5 12.3704H8.05C7.715 12.3704 7.245 12.2554 7.03 12.0404L6.39 11.5454C6.145 11.3604 6.19531 11.2454 6.19531 11.2454V6.16535Z" fill="#FFFFFF" ></path><path d="M3.59 5.68945C2.815 5.68945 2.5 5.98945 2.5 6.72945V10.7595C2.5 11.4995 2.815 11.7995 3.59 11.7995H4.605C5.38 11.7995 5.695 11.4995 5.695 10.7595V6.72945C5.695 5.98945 5.38 5.68945 4.605 5.68945H3.59Z" fill="#FFFFFF"></path></svg>
            <p className='text-[12px]'>
              
              {/* {props.stats.likes} */}
              </p>
          </p>
          <p className='text-[12px]'>•</p>
          <p>
            {/* {props.stats.comments}  */}
            Comments</p>
        </div>
        {/* <div className='px-6 py-3 flex items-center gap-3'>
          <p className='flex gap-2 items-center justify-center'>
          {props.stats.reposts} Reposts
          </p>
          <p className='text-[12px]'>•</p>
          <p>{props.stats.views} Views</p>
        </div> */}
        
      </div>
      <div className='flex justify-center false  max-h-[56px] gap-[8px] items-center p-[8px]'>
        <button className='flex flex-1 gap-[6px] max-w-[144px] xxl:w-[144px] h-[40px] text-center justify-center lg:flex-row flex-col items-center py-[8px] hover:bg-[#d7d7d8] rounded-md '>
          <p className='text-[#57585c]'><svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.89061 8.33071C8.89061 7.93071 9.01061 7.54071 9.23061 7.21071L11.8606 1.77C12.2906 1.12 13.3606 0.660001 14.2706 1C15.2506 1.33 15.9006 2.43 15.6906 3.41C15.6906 3.41 14.64 6.76071 14.6 7.06071C14.56 7.36071 14.64 7.63071 14.81 7.84071C14.98 8.03071 15.23 8.15071 15.5 8.15071H20.2806C21.0706 8.15071 21.7506 8.47071 22.1506 9.03071C22.5306 9.57071 22.6006 10.2707 22.3506 10.9807L20.5 18.4907C20.19 19.7307 18.84 20.7407 17.5 20.7407H12.6C11.93 20.7407 10.99 20.5107 10.56 20.0807L9.27999 19.0907C8.78999 18.7207 8.89061 18.4907 8.89061 18.4907V8.33071Z" fill="currentColor"></path><path d="M3.68 7.37891C2.13 7.37891 1.5 7.97891 1.5 9.45891V17.5189C1.5 18.9989 2.13 19.5989 3.68 19.5989H5.71C7.26 19.5989 7.89 18.9989 7.89 17.5189V9.45891C7.89 7.97891 7.26 7.37891 5.71 7.37891H3.68Z" fill="currentColor"></path></svg></p>
          <p className=''>Like</p>
        </button>
        <button className='flex flex-1 gap-[6px] max-w-[144px] xxl:w-[144px] h-[40px] text-center justify-center lg:flex-row flex-col items-center py-[8px] hover:bg-[#d7d7d8] rounded-md '>
          <p className='text-[#57585c]'><svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22H4.36159C3.22736 22 2.50986 20.7933 3.03406 19.8016L3.88777 17.9647C4.0333 17.6516 4.00372 17.2874 3.83127 16.9883C2.98451 15.5196 2.5 13.8153 2.5 12ZM8.5 14C8.5 13.4477 8.94772 13 9.5 13H15.5C16.0523 13 16.5 13.4477 16.5 14C16.5 14.5523 16.0523 15 15.5 15H9.5C8.94772 15 8.5 14.5523 8.5 14ZM9.5 8.99999C8.94772 8.99999 8.5 9.4477 8.5 9.99999C8.5 10.5523 8.94772 11 9.5 11H11.5C12.0523 11 12.5 10.5523 12.5 9.99999C12.5 9.4477 12.0523 8.99999 11.5 8.99999H9.5Z" fill=" #57585C"></path></svg></p>
          <p className=''>Comment</p>
        </button>
        <button className='flex flex-1 gap-[6px] max-w-[144px] xxl:w-[144px] h-[40px] text-center justify-center lg:flex-row flex-col items-center py-[8px] hover:bg-[#d7d7d8] rounded-md '>
          <p className='text-[#57585c]'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.81498 2C4.17498 2 2.00498 4.17 2.00498 7.81V16.18C2.00498 19.83 4.17498 22 7.81498 22H16.185C19.825 22 21.995 19.83 21.995 16.19V7.81C22.005 4.17 19.835 2 16.195 2H7.81498ZM17.035 16.18L15.345 17.87C15.195 18.02 15.005 18.09 14.815 18.09C14.625 18.09 14.435 18.02 14.285 17.87C13.995 17.58 13.995 17.1 14.285 16.81L14.695 16.4H9.10498C7.80498 16.4 6.75498 15.34 6.75498 14.05V12.28C6.75498 11.87 7.09498 11.53 7.50498 11.53C7.91498 11.53 8.25498 11.87 8.25498 12.28V14.05C8.25498 14.52 8.63498 14.9 9.10498 14.9H14.695L14.285 14.49C13.995 14.2 13.995 13.72 14.285 13.43C14.575 13.14 15.055 13.14 15.345 13.43L17.035 15.12C17.105 15.19 17.155 15.27 17.195 15.36C17.275 15.55 17.275 15.76 17.195 15.94C17.155 16.03 17.105 16.11 17.035 16.18ZM16.505 12.4698C16.095 12.4698 15.755 12.1298 15.755 11.7198V9.94984C15.755 9.47984 15.375 9.09984 14.905 9.09984H9.31498L9.72498 9.49984C10.015 9.78984 10.015 10.2698 9.72498 10.5598C9.57498 10.7098 9.38498 10.7798 9.19498 10.7798C9.00498 10.7798 8.81498 10.7098 8.66498 10.5598L6.97498 8.86984C6.90498 8.79984 6.85498 8.71984 6.81498 8.62984C6.73498 8.44984 6.73498 8.23984 6.81498 8.05984C6.85498 7.96984 6.90498 7.87984 6.97498 7.80984L8.66498 6.11984C8.95498 5.82984 9.43498 5.82984 9.72498 6.11984C10.015 6.40984 10.015 6.88984 9.72498 7.17984L9.31498 7.58984H14.905C16.205 7.58984 17.255 8.64984 17.255 9.93984V11.7198C17.255 12.1298 16.915 12.4698 16.505 12.4698Z" fill=" #57585C"></path></svg></p>
          <p className=''>Repost</p>
        </button>
        <button className='flex flex-1 gap-[6px] max-w-[144px] xxl:w-[144px] h-[40px] text-center justify-center lg:flex-row flex-col items-center py-[8px] hover:bg-[#d7d7d8] rounded-md '>
          <p className='text-[#57585c]'><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9354 2.58198C21.4352 2.0686 20.6949 1.87734 20.0046 2.07866L3.908 6.75952C3.1797 6.96186 2.66349 7.54269 2.52443 8.28055C2.38237 9.0315 2.87858 9.98479 3.52684 10.3834L8.5599 13.4768C9.07611 13.7939 9.74238 13.7144 10.1696 13.2835L15.9329 7.4843C16.223 7.18231 16.7032 7.18231 16.9934 7.4843C17.2835 7.77623 17.2835 8.24935 16.9934 8.55134L11.22 14.3516C10.7918 14.7814 10.7118 15.4508 11.0269 15.9702L14.1022 21.0538C14.4623 21.6577 15.0826 22 15.7628 22C15.8429 22 15.9329 22 16.013 21.9899C16.7933 21.8893 17.4135 21.3558 17.6436 20.6008L22.4156 4.52479C22.6257 3.84028 22.4356 3.09537 21.9354 2.58198Z" fill=" #57585C"></path></svg></p>
          <p className=''>Share</p>
        </button>
      </div>
    </div>
  </div>
  )
}

export default PostCard