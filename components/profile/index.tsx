import { LargeText, Subtitle, LargeTextBold } from "ui/typography";
import { MainButton } from "ui/buttons";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useProfileData, useGetLocalData, useModifyProfileData } from "hooks";
import { Controller, useForm } from "react-hook-form";
import { HookForm } from "./form";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect } from "react";

export const ProfileForm = () => {
  const { handleSubmit, reset, control } = useForm();
  const router = useRouter();
  const token = useGetLocalData("token");
  const { data, error, isLoading } = useProfileData();
  const {
    setData,
    data: updatedData,
    error: updateError,
    isLoading: updateLoading,
  } = useModifyProfileData();

  const submit = (newData: any) => {
    setData(newData);
  };

  useEffect(() => {
    if (updatedData) {
      router.reload();
    }
  }, [updatedData]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          marginTop: "15%",
          marginBottom: "20px",
        }}
      >
        <Subtitle sx={{ paddingBottom: "20px" }}>Perfil</Subtitle>
        {isLoading && (
          <Box sx={{ width: "100%", paddingTop: "20px" }}>
            <LinearProgress
              color="primary"
              sx={{ backgroundColor: "var(--orange)" }}
            />
          </Box>
        )}

        {!isLoading && !error && token && (
          <form>
            <HookForm
              Controller={Controller}
              userData={updatedData ? updatedData.UserData : data.userData}
              control={control}
            />
            <MainButton
              color="orange"
              sx={{ height: 50 }}
              callback={handleSubmit(submit)}
            >
              Save
            </MainButton>
          </form>
        )}
      </Box>
    </Container>
  );
};
