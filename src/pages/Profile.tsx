import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <div className="flex flex-col">
      <nav>
        <Link to="/clients">
          <i className="fi fi-rr-angle-small-left text-2xl"></i>
        </Link>
      </nav>

      <section className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="items-end object-cover h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-2 flex flex-col mt-[-10px]">
            <span className="h-5 w-[250px] text-xl text-blue-800">Kiggund Brevin</span>
            <span className="h-2 w-[200px] text-sm mt-2">kiggundubrevin@gmail.com</span>
            <span className="h-2 w-[200px] text-sm">Kampala, Uganda</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile