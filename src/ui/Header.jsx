import { Link } from "react-router-dom";
import Button from "./Button";
import { logout } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import SearchOrder from "../features/order/SearchOrder";
// import UserName from "../features/user/UserName";

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  return (
    <header className="z-999 absolute flex w-screen items-center justify-between bg-stone-200 bg-opacity-80 px-4 py-3 uppercase text-stone-600 sm:px-6 md:bg-opacity-0">
      <Link to="/" className="tracking-widest">
        山裡走走
      </Link>
      <span>
        <Link to="/trails" className="mx-2">
          尋找適合步道
        </Link>
        <Link to="/about" className="mx-2">
          關於網站
        </Link>
        {isAuthenticated ? (
          <>
            <p>Hi,{user}</p>
            <Button type="small" onClick={() => dispatch(logout())}>
              登出
            </Button>
          </>
        ) : (
          <Button to="/login">會員登入</Button>
        )}
      </span>
      {/* <SearchOrder /> */}
      {/* <UserName /> */}
    </header>
  );
}

export default Header;
