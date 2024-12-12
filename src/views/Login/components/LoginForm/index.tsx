import { signIn } from "@/redux/actions/auth";
import { HOME_URL } from "@/utils/routes";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginFormProps {
  username: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormProps>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    try {
      const response = await signIn(data);
      const { access_token } = response?.response?.data;

      if (access_token) {
        localStorage.setItem("access_token", access_token);
        router.push(HOME_URL);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="form-contact comment_form"
      onSubmit={handleSubmit(onSubmit)}
      id="commentForm"
    >
      <div className="form-group">
        <input
          className="form-control"
          {...register("username")}
          type="text"
          placeholder="Username or Email"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          {...register("password")}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <div className="checkbox">
          <div className="custome-checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              name="checkbox"
              id="createaccount"
            />
            <label className="form-check-label label_info fw-700 text-grey-100 font-md">
              <span>Remember me</span>
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <button
          className="btn btn-lg bg-dark text-white"
          disabled={isSubmitting}
          type="submit"
        >
          LOGIN
          {isSubmitting && <CircularProgress size="30px" />}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
