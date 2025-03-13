import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo-white.png";

import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaBlog } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RouteBlog, RouteBlogByCategory, RouteCategoryDetails, RouteCommentDetails, RouteIndex, RouteUser } from "@/helpers/RouteName";
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";
import { useSelector } from "react-redux";





function AppSidebar() {
  const user = useSelector(state => state.user)
  const { data: categoryData } = useFetch(`${getEnv('VITE_API_BASE_URL')}/category/all-category`, {
    method: 'get',
    credentials: 'include'
  })


  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <img src={logo} width={40}></img>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup >
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaHome />
                <Link to={RouteIndex}>Home</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>


            {user && user.isLoggedIn 
            ? <>
            
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaBlog />
                <Link to={RouteBlog}>Blog</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaComment />
                <Link to={RouteCommentDetails}>Comments</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </>
            :
            <></>
          }
          {user && user.isLoggedIn && user.user.role === 'admin'
          ? <>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <BiSolidCategory />
                <Link to={RouteCategoryDetails}>categories</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>


            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaUser />
                <Link to={RouteUser}>users</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </>
            :
            <></>
          }

          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup >
          <SidebarGroupLabel>
            Categories
          </SidebarGroupLabel>
          <SidebarMenu>
            {categoryData && categoryData.category.length > 0 && categoryData.category.map(category =>
              <SidebarMenuItem key={category._id}>
                <SidebarMenuButton>
                  <GoDotFill />
                  <Link to={RouteBlogByCategory(category.slug)}>{category.name}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}


          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

    </Sidebar>
  )
}

export default AppSidebar