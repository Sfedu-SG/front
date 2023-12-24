import { PageLayouting } from "../../hocs";
import { memo, useState } from "react";
import {
  ActivePageTitle,
  AuthButtonContainer,
  ContentContainer,
  AuthInputsContainer,
  AuthTitleTextContainer,
  Button,
} from "../../components";
import { useForm } from "react-hook-form";
import { Alert, TextField } from "@mui/material";
import { signIn } from "../../utils/services/authService.ts";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

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
    },
    reValidateMode: "onSubmit",
  });

  const onSubmit = async () => {
    const login = getValues("login");
    const password = getValues("password");

    const values = { login, password };

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

    try {
      const data = await signIn({ login, password });
      localStorage.setItem("access_token", data["access_token"]);
      navigate("/", { replace: true });
    } catch {
      setIsError(true);
    }
  };

  return (
    <ContentContainer>
      {isError && (
        <Alert severity="error" onClick={() => setIsError(false)}>
          Что-то пошло не так
        </Alert>
      )}
      <AuthTitleTextContainer>
        <ActivePageTitle route={"/SignIn"}>Регистрация</ActivePageTitle>/
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
      </AuthInputsContainer>
      <AuthButtonContainer>
        <Button onClick={handleSubmit(onSubmit)}>Зарегистрироваться</Button>
      </AuthButtonContainer>
    </ContentContainer>
  );
};

export default PageLayouting(memo(SignInPage));
