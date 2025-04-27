import { Button } from "@chakra-ui/react";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { auth } from "@/auth";
//import { signOutUser } from "@/lib/actions/user.actions";

const UserButton = async () => {
    const session = await auth();

    if (!session) {
        return (
            <Button asChild>
                <Link href='/sign-in'>
                    <UserIcon /> Sign In
                </Link>
            </Button>
        )
    }

    const initialName = session.user?.name?.charAt(0).toUpperCase() ?? 'U';
    const profileImage = session.user?.image;

    return (
        <div className="user-button-wrapper flex gap-2 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="user-button-trigger flex items-center">
                        <Button variant='ghost' className='user-avatar-button relative border w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-300'>
                            {profileImage ? (
                                <div className="user-avatar-image-wrapper absolute inset-0">
                                    <Image src={profileImage} alt="profile" fill className="rounded-full object-cover" />
                                </div>
                            ) : (
                                <span className="user-avatar-initial text-md font-medium">
                                    {initialName}
                                </span>
                            )}
                        </Button>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="user-dropdown-content w-56 md:mr-4">
                    <DropdownMenuLabel className="user-dropdown-label w-56">
                        <div className="user-info flex flex-col space-y-1">
                            <div className="user-name text-sm font-bold leading-none">
                                {session.user?.name}
                            </div>
                            <div className="user-email text-sm font-normal leading-none text-gray-600">
                                {session.user?.email}
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="user-signout-item p-0 mb-1">
                        <form  className="w-full">{/*action={signOutUser } */}
                            <Button variant='ghost' className='user-signout-button w-full py-4 px-2 h-4 justify-start'>
                                Sign Out
                            </Button>
                        </form>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserButton;
