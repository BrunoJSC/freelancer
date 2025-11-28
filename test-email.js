async function testEmail() {
  try {
    console.log("Sending test email...");
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Teste",
        lastName: "Script",
        email: "teste@example.com",
        message:
          "Esta é uma mensagem de teste enviada via script para validar a API com React Email.",
      }),
    });

    const data = await response.json();
    console.log("Status:", response.status);
    console.log("Response:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

testEmail();
