import { Input} from '@nextui-org/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'


function NavSearch() {
  return (
        <form className="form-inline m-auto">
         <Input
          classNames={{
            base: "max-w-full lg:min-w-[50vw] md:min-w-[50vw] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Search for questions, courses & reactions"
          size="sm"
          startContent={<FaSearch size={18} />}
          type="search"
        />
        </form>
  )
}

export default NavSearch