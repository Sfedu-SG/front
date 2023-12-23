import { PageLayouting } from "../../hocs";
import { memo, useState } from "react";
import {
  ActivePageTitle,
  AuthButtonContainer,
  AuthContainer,
  AuthInputsContainer,
  AuthTitleTextContainer,
  Button,
} from "../../components";
import { useForm } from "react-hook-form";
import { Alert, TextField } from "@mui/material";
import { signUp } from "../../utils/services/authService.ts";

const SignUpPage = () => {
  const [isError, setIsError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      replyPassword: "",
    },
    reValidateMode: "onSubmit",
  });

  const onSubmit = async () => {
    const login = getValues("login");
    const password = getValues("password");
    const replyPassword = getValues("replyPassword");

    const values = { login, password, replyPassword };

    if (
      Object.entries(values).some((item) => {
        if (!item[1]) {
          setError(item[0], { message: "Необходимо заполнить поле" });
          return true;
        }
        return false;
      })
    ) {
      return;
    }

    if (password !== replyPassword) {
      setError("replyPassword", { message: "Это поле не совпадает с паролем" });
      return;
    }

    try {
      await signUp({ login, password });
    } catch {
      setIsError(true);
    }
  };

  return (
    <AuthContainer>
      {isError && (
        <Alert severity="error" onClick={() => setIsError(false)}>
          Что-то пошло не так
        </Alert>
      )}
      <AuthTitleTextContainer>
        <ActivePageTitle route={"/signUp"}>Регистрация</ActivePageTitle>/
        <ActivePageTitle route={"/signIn"}>Вход</ActivePageTitle>
      </AuthTitleTextContainer>
      <AuthInputsContainer>
        <TextField
          label={"Введите логин"}
          fullWidth
          error={!!errors.login}
          helperText={errors.login?.message}
          {...register("login", { required: true })}
        />
        <TextField
          label={"Введите пароль"}
          fullWidth
          type={"password"}
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", { required: true })}
        />
        <TextField
          label={"Повторите пароль"}
          fullWidth
          type={"password"}
          error={!!errors.replyPassword}
          helperText={errors.replyPassword?.message}
          {...register("replyPassword", { required: true })}
        />
      </AuthInputsContainer>
      <AuthButtonContainer>
        <Button onClick={handleSubmit(onSubmit)}>Зарегистрироваться</Button>
      </AuthButtonContainer>
    </AuthContainer>
  );
};

export default PageLayouting(memo(SignUpPage));
