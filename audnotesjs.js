const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', async () => {
  const username = 'exampleuser';
  const password = 'examplepassword';

  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
    } else {
      const errorData = await response.json();
      console.error(errorData.error);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
