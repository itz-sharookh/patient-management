import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

// const userArray = [{ username: "test@test.com", password: "123456" }];
function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json(
      { message: "Unsupported Mode." },
      {
        status: 422,
      }
    );
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json(
      {
        message: "Could not authenticate User",
      },
      {
        status: 500,
      }
    );
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours + 1);
  localStorage.setItem("expiration", expiration.toISOString());
  return redirect("/");
}

export async function dummyAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json(
      { message: "Unsupported Mode." },
      {
        status: 422,
      }
    );
  }

  const data = await request.formData();
  console.log(data.get("email") + data.get("password"));

  if (
    data.get("email") === "test@test.com" &&
    data.get("password") === "123456"
  ) {
    const token = "123456789";
    localStorage.setItem("token", token);
    const expiration = new Date();
    expiration.setHours(expiration.getMinutes() + 10);
    localStorage.setItem("expiration", expiration.toISOString());
    return redirect("/dashboard");
  }
  return redirect("/");
}
