import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function IndexPage() {
  const navigate = useNavigate();
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleRegister = () => {
    // Generate a unique link for the visitor
    const uniqueLink = `https://yourapp.com/exit?visitor=${encodeURIComponent(visitorName)}`;
    setQrCodeValue(uniqueLink);
    // Here you would also save the visitor's data and the unique link to your database
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold">Registro de Visitas</h2>
          <Input
            placeholder="Nombre"
            value={visitorName}
            onChange={(e) => setVisitorName(e.target.value)}
          />
          <Input
            placeholder="Correo Electrónico"
            value={visitorEmail}
            onChange={(e) => setVisitorEmail(e.target.value)}
          />
          <Button onClick={handleRegister}>Registrar Visita</Button>
        </CardContent>
      </Card>

      {qrCodeValue && (
        <div className="text-center">
          <h3 className="text-xl font-bold">Código QR para Salida</h3>
          <QRCode value={qrCodeValue} size={256} />
          <p className="mt-2">Escanea este código al salir para registrar tu salida.</p>
        </div>
      )}
    </div>
  );
}
