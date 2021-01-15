export const sendUserRequest = async (data: { age: number, phone: string, comment: string }) => {
  const res = await fetch(
    "http://localhost:8080/request",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}
