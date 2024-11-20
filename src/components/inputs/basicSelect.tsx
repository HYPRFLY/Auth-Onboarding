import React from 'react';

const BasicSelect = ({ _class, list, value, onChange }: any) => {
    return (
        <select className={`bg-transparent border-b-[1px] mt-[0] pt-[10px] pb-[3px] px-[2px] text-[14px] focus:outline-none ${_class}`} value={value} onChange={onChange} >
            {
                list.map((l: any, index: number) => (
                    <option key={index} value={l.key} className='text-black'>{l.value}</option>
                ))
            }
        </select>
    )
}

export default BasicSelect;