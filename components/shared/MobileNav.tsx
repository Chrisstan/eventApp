import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import NavItems from './NavItems'
  

const MobileNav = () => {
  return (
    <div className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image
                    src='/assets/icons/menu.svg'
                    alt='menu'
                    width={24}
                    height={24}
                    className='cursor-pointer'
                />
            </SheetTrigger>
            <SheetContent className='flex flex-col bg-white md:hidden gap-6'>
                <Image src='/assets/images/logo.svg'
                    alt='logo'
                    width={128}
                    height={38}
                />
                <Separator className='border border-grey-50' />
                <NavItems />
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav