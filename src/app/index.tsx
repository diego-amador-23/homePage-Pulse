import styled from "styled-components";
import Header from "../components/header";
import Main from "../components/main";
import axios from "axios";

const AppContainer = styled.div``;

export const api = axios.create({
  baseURL: "https://notification-back-exbe.onrender.com", // Corrigir a URL aqui
});

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

navigator.serviceWorker
  .register("/service-worker.js")
  .then(async (serviceWorker) => {
    let subscription = await serviceWorker.pushManager.getSubscription();

    if (!subscription) {
      const publicKeyResponse = await api.get("/push/public_key");
      console.log("Public Key:", publicKeyResponse.data.publicKey); // Log da chave pública

      subscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          publicKeyResponse.data.publicKey
        ),
      });
    }

    await api.post("/push/register", { subscription });
    await api.post("/push/send", { subscription });
  })
  .catch((error) => {
    console.error("Error in Service Worker or Push Subscription:", error);
  });

  

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  );
}
export default App;
