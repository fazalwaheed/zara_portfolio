interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export const submitToGoogleSheet = async (data: FormData) => {
  // ✅ Get env var INSIDE the function
  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!GOOGLE_SCRIPT_URL) {
    throw new Error('NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not set in .env.local');
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};