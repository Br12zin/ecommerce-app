import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { StripeProvider, confirmPayment } from "@stripe/stripe-react-native";
import { PaymentService } from "../../models/services/PaymentService";
import colors from "../../styles/colors";

export default function Cart() {
  const [valor, setValor] = useState("0");
  const [mensagem, setMensagem] = useState("");
  const paymentService = new PaymentService();

  const processPayment = async () => {
    try {
      // Passa o valor como número (em centavos)
      const clientSecret = await paymentService.paymentIntent(Number(valor));

      // Confirma o pagamento com o Stripe (aparece a tela de pagamento)
      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: "Card",
        paymentMethodData: {
          billingDetails: { email: "cliente@teste.com" },
        },
      });

      if (error) {
        setMensagem(`Erro no pagamento: ${error.message}`);
      } else if (paymentIntent) {
        setMensagem("Pagamento realizado com sucesso!");
        // opcional: enviar paymentIntent.id para o backend
        await paymentService.confirmPayment(paymentIntent.id);
      }
    } catch (error: any) {
      setMensagem(`Erro: ${error.message}`);
    }
  };

  return (
    <StripeProvider publishableKey="pk_test_51SLo50Cm7YzW4TAWbIUsbzb6fhISBiOroeHuwkZUMNslLK6hjXlVr4zo9mtu8i7GnqH7GTrnp8wOKM5WrUbHOein0029jzBEy3">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.gray[800],
          padding: 16,
        }}
      >
        <Text style={{ color: colors.white, fontSize: 20, marginBottom: 10 }}>
          Pagamento com Stripe
        </Text>
        <TextInput
          style={{
            backgroundColor: colors.white,
            borderRadius: 8,
            padding: 10,
            width: 200,
            textAlign: "center",
          }}
          keyboardType="numeric"
          placeholder="Valor em centavos"
          value={valor}
          onChangeText={setValor}
        />
        <View style={{ marginTop: 20 }}>
          <Button title="Pagar" onPress={processPayment} />
        </View>
        <Text style={{ color: colors.white, marginTop: 20 }}>{mensagem}</Text>
      </View>
    </StripeProvider>
  );
}
