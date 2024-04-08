import React from 'react'
import { TfiArrowTopRight } from 'react-icons/tfi'

const Link = () => {
  return (
    <button type='button' className="flex items-center cursor-pointer gap-1 border-r px-2">
        <TfiArrowTopRight className="text-sm"/>
        <span>Link</span>
    </button>
  )
}

export default Link