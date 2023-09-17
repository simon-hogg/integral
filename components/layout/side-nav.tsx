"use client";
import dynamic from 'next/dynamic' 
import { Session } from "next-auth";
import UserMenu from "../home/user-menu";
import { useSignInModal } from "./sign-in-modal";

function SideNav({ session }: { session: Session | null }) {
    const { SignInModal, setShowSignInModal } = useSignInModal();
    return (
        <>
        <SignInModal />
        <div className='flex px-3 py-3 shrink-0 flex-col'>
            <div className='flex basis-auto'>
            {session ? (
              <UserMenu session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
            </div>
        </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(SideNav), { ssr: false });