interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#333" }}>Nova mensagem do formulário de contato</h2>
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          margin: "20px 0",
        }}
      >
        <p>
          <strong>Nome:</strong> {firstName} {lastName}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Mensagem:</strong>
        </p>
        <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
      </div>
      <p style={{ color: "#666", fontSize: "12px" }}>
        Enviado através do formulário de contato do portfolio
      </p>
    </div>
  );
}
