export const sendUserRequest = async (data: { age: number, phone: string, comment: string }) => {
  const res = await fetch(
    "http://localhost:8080/request",
    {
      method: "POST",
      headers: [
        ["Content-Type", "application/json"]
      ],
      body: JSON.stringify(data)
    }
  );
}
