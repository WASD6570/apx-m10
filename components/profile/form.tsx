import { LargeTextBold } from "ui/typography";
import { InputProfile } from "ui/textfield";

export function HookForm({ Controller, control, userData }: any) {
  const profileInfo = () => {
    let info = [];
    for (const key in userData) {
      if (key === "email") {
        info.push(null);
      } else if (key === "purchases") {
        info.push(null);
      } else {
        const datos = (
          <Controller
            key={key}
            name={key}
            control={control}
            render={({ field: { onChange, value } }: any) => {
              return (
                <>
                  <LargeTextBold>{key}</LargeTextBold>
                  <InputProfile
                    defaultValue={userData[key]}
                    onChange={onChange}
                    value={value}
                    placeholder={userData[key]}
                    type={
                      key === "password"
                        ? "password"
                        : key === "email"
                        ? "email"
                        : key === "phone"
                        ? "number"
                        : "text"
                    }
                  ></InputProfile>
                </>
              );
            }}
          ></Controller>
        );
        info.push(datos);
      }
    }
    return info;
  };
  return <>{profileInfo().map((item) => item)}</>;
}
