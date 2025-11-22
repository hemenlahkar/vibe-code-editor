import SignInFormClient from "@/modules/auth/components/sign-in-form-client";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Image src={"/login.svg"} alt="Login Image" height={300} width={300} className="m-4"/>
      <SignInFormClient />
    </>
  );
};

export default Page;
