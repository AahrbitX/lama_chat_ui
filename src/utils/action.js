//const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function uploadFile(file, setUploadStatus) {
  //console.log(API_URL);
  if (!file) {
    setUploadStatus("Please select a file to upload.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    setUploadStatus("Uploading...");
    const response = await fetch("/upload", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    });

    console.log(response);

    if (response.ok) {
      setUploadStatus("Uploaded");
      const result = await response.json();
      // console.log(result.session_id);
      setUploadStatus(
        `File uploaded successfully! Server Response: ${
          result.message || "Success"
        }`
      );
      return result;
    } else {
      setUploadStatus("Upload Failed");
      const errorResponse = await response.json();
      setUploadStatus(
        `Failed to upload file. Error: ${
          errorResponse.message || "Unknown error"
        }`
      );
    }
  } catch (error) {
    setUploadStatus("Error In Upload");
    console.error("Upload error:", error);
    setUploadStatus("An error occurred during upload. Please try again later.");
  }
}

export async function chat(query) {
  let session_id = null;
  if (typeof window !== "undefined") {
    session_id = sessionStorage.getItem("session_id");
    console.log("Session ID:", session_id);
  } else {
    console.error(
      "sessionStorage is not available in the current environment."
    );
  }
  try {
    // setUploadStatus('Uploading...');
    const response = await fetch("/chat" {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_input: query,
        session_id: session_id,
      }),
      credentials: "include",
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.session_id);

      return result;
    } else {
      const errorResponse = await response.json();
      console.log(errorResponse);
      // console.error("Chat error:", errorResponse);
    }
  } catch (error) {
    console.error("Chat error:", error);
  }
}
