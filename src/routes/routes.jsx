import UserRoot from "./../pages/userRoot/index"
import Home from "../pages/home"
import NoPage from "../pages/noPage"
import Products from "../pages/products"
import ProductDetail from "../pages/detail"
import Cart from "../pages/cart"
import Checkout from "../pages/checkout"
import SignIn from "../pages/sign-in"
import SignUp from "../pages/sign-up"
import CheckEmail from "../pages/check-email"
import ResetPassword from "../pages/reset-password"
import NewPassword from "../pages/new-password"
import VerificationPage from "../pages/verification"
import WishList from "../pages/wishlist"
import Profile from "../pages/profile"
import ProductList from "../pages/productList"
import Orders from "../pages/orders"
import AccountInfo from "../pages/accountInfo"
import ConfirmedOrder from "../pages/confirmedOrder"
import AddAddress from "../pages/addAddress"
import FormikForAddress from "../Components/formikForAddress"
import AdminPage from "../pages/admin/index"

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/check-email",
        element: <CheckEmail />,
      },
      {
        path: "/verification",
        element: <VerificationPage />,
      },
      {
        path: "confirmed-order",
        element: <ConfirmedOrder />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/new-password",
        element: <NewPassword />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile/wishlist",
            element: <WishList />,
          },
          {
            path: "/profile/orders",
            element: <Orders />,
          },
          {
            path: "/profile/account-info",
            element: <AccountInfo />,
          },
          {
            path: "/profile/add-address",
            element: <AddAddress />,
          },
        ],
      },

      {
        path: "/productlist",
        element: <ProductList />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]
