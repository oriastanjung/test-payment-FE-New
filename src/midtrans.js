// midtrans.js

export const loadMidtransSnapScript = (clientKey) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", clientKey);
    document.head.appendChild(script);
  };