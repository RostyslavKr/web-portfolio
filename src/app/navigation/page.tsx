"use client";
import Link from "next/link"
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";


export default function NavigationPage() {
   const router = useRouter();

    const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
    };
    const sections = ['intro', 'about', 'skills', 'projects', 'contacts'];
    return (<Dialog.Root open onOpenChange={handleOnOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-contain bg-[#141A19] bg-no-repeat bg-bottom" />

        <Dialog.DialogContent className="relative ">
                <div className="px-4 pt-4 flex justify-between items-center mx-auto mb-[150px]">
                    <Image  src="/images/logo.svg" width={100} height={100} alt="logo" />
                   <Dialog.Close asChild> 
                <Image className="relative top-0 right-0"  src="/images/close.svg" width={32} height={32} alt="close" /></Dialog.Close>
                </div>
            
            
               <nav className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4 font-lato font-bold text-base text-white">
                <ul>
                        {sections.map(section => <li key={section}><Link className='block group relative' href={`/#${section}`}><span className="uppercase hover:text-[#704bc1] focus:text-[#704bc1]">{section}</span></Link></li> )}
                </ul>
                </nav> 
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
   
        
        
        
    )
}