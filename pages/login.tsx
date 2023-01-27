import { LoginForm, AboutLoginSection } from "@/components/login/loginSection";
export default function Login() {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(180deg,rgb(153, 196, 225) 0%,rgba(51, 93, 147, 0.6) 100%)",
        }}
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="bg-white rounded-lg shadow-md w-[900px]">
          <div className="flex flex-row items-center p-4 justify-around gap-7">
            <LoginForm />
            <AboutLoginSection />
          </div>
        </div>
      </div>
    </div>
  );
}
