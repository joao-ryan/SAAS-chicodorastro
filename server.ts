import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Check if API key is set
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({ 
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  }) : null;

  // AI Chat Route (Streaming SSE)
  app.post("/api/chat", async (req, res) => {
    try {
      if (!ai) {
        return res.status(500).json({ error: "API do Gemini não configurada (GEMINI_API_KEY faltando)." });
      }

      const { message, history, context } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Mensagem é obrigatória." });
      }

      const systemInstruction = `Você é Chico IA, o assistente central e coração tecnológico da plataforma Chico do Rastro.
Sua personalidade: inteligente, acolhedora, moderna, jovem, empática, segura e premium (semelhante ao ChatGPT/Perplexity, mas focado em orientar jovens brasileiros).

Seu papel é ser um mentor digital educacional e de cidadania.
Você ajuda adolescentes a:
- Entender profundamente seus direitos.
- Aprender cidadania ativa e respeito no ambiente escolar e digital.
- Lidar com casos práticos (ex: bullying, cyberbullying, assédio, vazamentos).
- Compreender proteção e segurança digital (LGPD, golpes, privacidade).
- Buscar caminhos oficiais de denúncia e acolhimento.

Contexto do Usuário atual:
Nome: ${context?.name || 'Jovem'}
Nível Atual: ${context?.title || 'Iniciante'} (XP: ${context?.xp || 0})
Módulos que ele explorou ou está trilhando: ${context?.trilhas || 'Nenhum por enquanto'}

Instruções cruciais:
1. Responda em tom de conversa natural e acolhedora, nunca robótica ou puramente jurídica. Use Markdown para formatação (negrito, listas). 
2. Você DÁ CONSELHOS EDUCATIVOS, mas NUNCA substitui um psicólogo, polícia, médico ou advogado.
3. Não faça textões exagerados a menos que seja para explicar um conteúdo denso com calma.
4. Sempre que um risco iminente ou violência for detectado, recomende: conversar com um adulto de confiança, escola, Disque 100, Conselho Tutelar, DEAM (Delegacia da Mulher), SaferNet ou CVV (188).
5. Mostre que você "lembra" do contexto do usuário quando apropriado (ex: elogiando o nível dele ou trilhas feitas).
6. SEJA ENVOLVENTE, FLUIDO E MODERNO.`;

      const formattedHistory = (history || []).map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const contents = [
        ...formattedHistory,
        { role: 'user', parts: [{ text: message }]}
      ];

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      for await (const chunk of responseStream) {
        if (chunk.text) {
          const data = JSON.stringify({ text: chunk.text });
          res.write(`data: ${data}\n\n`);
        }
      }
      res.write("data: [DONE]\n\n");
      res.end();

    } catch (error: any) {
      console.error("Erro no chat da IA:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: error.message || "Erro interno ao processar a mensagem." });
      } else {
        res.write(`data: ${JSON.stringify({ error: "Erro interno ao processar a mensagem." })}\n\n`);
        res.end();
      }
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
