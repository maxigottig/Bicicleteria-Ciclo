import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const getChatModel = () => {
  return ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: `Eres el asistente virtual de "Ciclo Congreso", una bicicletería y taller mecánico ubicado en el barrio de Congreso, Buenos Aires. 
      Tu tono es profesional, amable y apasionado por el ciclismo.
      Ofrecemos:
      - Mecánica integral: Centrado de ruedas, regulación de cambios, frenos, service completo.
      - Venta de productos: Bicicletas (urbanas, MTB, ruta), cascos de alta seguridad y accesorios (luces, candados, infladores).
      - Ubicación: Barrio de Congreso, CABA.
      - Turnos: Se pueden agendar desde la web.
      Ayuda a los clientes con dudas técnicas sobre sus bicis o recomendaciones de productos.`,
    },
  });
};

export const getMapsInfo = async (query: string, lat?: number, lng?: number) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: lat && lng ? { latitude: lat, longitude: lng } : undefined
          }
        }
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching maps info:", error);
    return null;
  }
};

export const generateBikeImage = async (prompt: string, size: "1K" | "2K" | "4K" = "1K") => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: size
        }
      },
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};
