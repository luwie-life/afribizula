

const API_URL =
  "http://localhost:5000";

export async function getProfile(
  token
) {
  const response =
    await fetch(
      `${API_URL}/api/users/profile`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

  return response.json();
}
