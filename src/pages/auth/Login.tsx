import { FC } from "react";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import { PrimButton } from "../../components/Button";
import loginImage from "../../assets/login.png";
import { Link, useNavigate, useNavigation } from "react-router-dom";

interface objLoginType {
  email: string;
  password: string;
}
const Login: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 bg-slate-100  dark:bg-slate-800">
        <img src={loginImage} alt="image-login" className="hidden md:block" />
        <div className="flex  m-10 lg:m-10 justify-center items-center  dark:bg-slate-800  rounded-2xl">
          <form className="flex flex-col w-full lg:w-7/12 p-5 items-center shadow-md bg-white dark:bg-@264653 gap-3 rounded-md]">
            <h1 className="font-semibold text-3xl text-back dark:text-white">
              LOGIN
            </h1>
            <div className="w-full">
              <label className=" dark:text-white">Email</label>
              <Input placeholder="Enter Your Email" id="Email" type="email" />
            </div>
            <div className="w-full">
              <label className=" dark:text-white">Password</label>
              <Input
                placeholder="Enter Your Password"
                id="input-password"
                type="password"
              />
            </div>
            <PrimButton label="Login" id=" button-login" type="submit" />
            <p className="text-black dark:text-white">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-black dark:text-@2A9D8F"
                id="nav-register "
              >
                {" "}
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
