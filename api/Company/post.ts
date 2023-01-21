import instance from "../../axios/axios";

export const createABusinessPage = async (formData:any) => {
  const result = await instance.post(
    `/company/create`,
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return result;
};

export const addAdmin = async (formData: any) => {
  const result = await instance.post(`/company/addAdmin`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
};

