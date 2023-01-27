import instance from "../../axios/axios";

export const getCompanyAdminDetails = async (adminId: any) => {
  console.log("adminId ", adminId);

  const { data } = await instance.get(
    `/companyAdmin/profile?adminId=${adminId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const getAllCompanyPost = async (companyId: any) => {
  console.log("adminId ", companyId);

  const { data } = await instance.get(
    `/companyAdmin/getAllCompanyPosts?companyId=${companyId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const getAJobPost = async (jobId: any) => {
  const { data } = await instance.get(
    `/companyAdmin/getAJobPost?jobId=${jobId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const getAppliedUsers = async (jobId: any) => {
  const { data } = await instance.get(
    `/companyAdmin/getAJobPost?jobId=${jobId}&users=${true}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const rejectApplicant = async (jobId: any, applicantId: any) => {
  const { data } = await instance.get(
    `/companyAdmin/rejectApplicant?applicantId=${applicantId}&jobId=${jobId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const acceptApplicant = async (jobId: any, applicantId: any) => {
  const { data } = await instance.get(
    `/companyAdmin/acceptApplicant?applicantId=${applicantId}&jobId=${jobId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};