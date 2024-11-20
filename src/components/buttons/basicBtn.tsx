import React from 'react';

const BasicBtn = ({ action, _class, children }: any) => {
    return (
        <button className={`w-full h-[44px] link-btn flex justify-center items-center text-[14px] py-[0] px-[25px] rounded-[30px] bg-[#000] border border-[white] hover:bg-[#ffffff] hover:text-[#000000] ${_class}`} onClick={action}>{children}</button>
    )
}

export default BasicBtn;