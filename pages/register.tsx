import { RegisterForm } from "@/components/register/registerSection";
import { AboutRegisterSection } from "@/components/register/registerSection";

export default function Register() {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(180deg,rgb(153, 196, 225) 0%,rgba(51, 93, 147, 0.6) 100%)",
        }}
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="bg-white rounded-lg shadow-md w-[900px] min-[1400px]:w-[1100px]">
          <div className="flex flex-row-reverse items-center justify-center p-4">
            <RegisterForm />
            <AboutRegisterSection />
          </div>
        </div>
      </div>
    </>
  );
}
