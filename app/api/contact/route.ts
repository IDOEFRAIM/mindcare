import { NextResponse } from 'next/server';

interface ContactRequestBody {
  name: string;
  company: string;
  need: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, company, need, message } = body;

    // 1. Validation de base
    if (!name || !company || !message) {
      return NextResponse.json(
        { success: false, error: 'Champs obligatoires manquants.' },
        { status: 400 }
      );
    }

    const TESTMAIL_API_KEY = process.env.TESTMAIL_API_KEY;
    
    if (!TESTMAIL_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Clé API manquante sur le serveur.' },
        { status: 500 }
      );
    }

    // 2. LA CORRECTION : Ajouter la clé API dans l'URL (Query Parameter)
    // C'est ce qui règle l'erreur "GET query missing"
    const TESTMAIL_API_URL = `https://api.testmail.app/api/send?apikey=${TESTMAIL_API_KEY}`;

    // 3. Envoi de la requête
    const res = await fetch(TESTMAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'idoefraim06@gmail.com',
        subject: `[Mindcare] Message de ${name}`,
        text: `Nom: ${name}\nEntreprise: ${company}\nBesoin: ${need}\nMessage: ${message}`,
      }),
    });

    let responseData;
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      responseData = await res.json();
    } else {
      responseData = { message: await res.text() };
    }

    if (!res.ok) {
      console.error("Détail Erreur Testmail:", responseData);
      return NextResponse.json(
        { success: false, error: "L'envoi a échoué.", details: responseData },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Erreur Interne:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors du traitement." },
      { status: 500 }
    );
  }
}